import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryKey,
  MutationKey
} from '@tanstack/react-query';
import { getQueryClient } from './query-client';

// Base types
export interface BaseQueryConfig<TData = unknown> {
  queryKey: QueryKey;
  queryFn: () => Promise<TData>;
  enabled?: boolean;
  staleTime?: number;
  gcTime?: number;
  retry?: number | boolean;
}

export interface BaseMutationConfig<
  TData = unknown,
  TVariables = unknown,
  TError = Error
> {
  mutationKey?: MutationKey;
  mutationFn: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData, variables: TVariables) => void | Promise<void>;
  onError?: (error: TError, variables: TVariables) => void | Promise<void>;
  onMutate?: (variables: TVariables) => Promise<unknown> | unknown;
}

// Query API creator
export function createQueryApi<TData = unknown, TError = Error>(
  config: BaseQueryConfig<TData>
) {
  return {
    // For client components
    useQuery: (
      options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
    ) => {
      return useQuery({
        queryKey: config.queryKey,
        queryFn: config.queryFn,
        enabled: config.enabled,
        staleTime: config.staleTime,
        gcTime: config.gcTime,
        retry: config.retry,
        ...options
      });
    },

    // For server components (prefetch)
    prefetch: async () => {
      const queryClient = getQueryClient();
      await queryClient.prefetchQuery({
        queryKey: config.queryKey,
        queryFn: config.queryFn,
        staleTime: config.staleTime,
        gcTime: config.gcTime
      });
      return queryClient;
    },

    // Fetch data
    fetch: config.queryFn,

    // Get cached data
    getData: () => {
      const queryClient = getQueryClient();
      return queryClient.getQueryData<TData>(config.queryKey);
    },

    // Invalidate query
    invalidate: async () => {
      const queryClient = getQueryClient();
      await queryClient.invalidateQueries({ queryKey: config.queryKey });
    },

    // Set query data manually
    setData: (data: TData) => {
      const queryClient = getQueryClient();
      queryClient.setQueryData(config.queryKey, data);
    },

    // Query key for external use
    queryKey: config.queryKey
  };
}

// Mutation API creator
export function createMutationApi<
  TData = unknown,
  TVariables = unknown,
  TError = Error
>(config: BaseMutationConfig<TData, TVariables, TError>) {
  return {
    // For client components
    useMutation: (
      options?: Omit<
        UseMutationOptions<TData, TError, TVariables>,
        'mutationFn' | 'mutationKey'
      >
    ) => {
      return useMutation({
        mutationKey: config.mutationKey,
        mutationFn: config.mutationFn,
        onSuccess: config.onSuccess,
        onError: config.onError,
        onMutate: config.onMutate,
        ...options
      });
    },

    // Execute mutation server-side
    mutate: async (variables: TVariables) => {
      return await config.mutationFn(variables);
    },

    // Mutation key for external use
    mutationKey: config.mutationKey
  };
}
