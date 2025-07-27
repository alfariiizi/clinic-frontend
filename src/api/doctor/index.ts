import { createQueryApi } from '@/lib/api-client';
import { Configuration, DoctorApi } from '../__spec';
import { getValidAccessToken } from '@/lib/auth';

const api = new DoctorApi(
  new Configuration({
    // basePath: env.NEXT_PUBLIC_BACKEND_URL,
    basePath: 'https://clinic-backend.agencerdas.id',
    accessToken: async () => {
      const token = await getValidAccessToken().then((d) => d as string);
      return token;
    }
  })
);

export const __doctor = {
  getAll: createQueryApi({
    queryKey: ['doctors'],
    queryFn: async () => {
      const tenantId = '7bb99a9f-4067-4a36-9447-ac599c17b645';
      const response = await api.getDoctors(tenantId);
      return response.data.data;
    }
  })
};
