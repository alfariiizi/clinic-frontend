'use client';

import { Table } from './tables';
import { columns } from './tables/columns';
import { api } from '@/api/root';

type ListingPageProps = {};

export default function ListingPage({}: ListingPageProps) {
  // Showcasing the use of search params cache in nested RSCs
  // const page = searchParamsCache.get('page');
  // const search = searchParamsCache.get('name');
  // const pageLimit = searchParamsCache.get('perPage');
  // const categories = searchParamsCache.get('category');

  // const filters = {
  //   page,
  //   limit: pageLimit,
  //   ...(search && { search }),
  //   ...(categories && { categories: categories })
  // };

  const res = api.doctor.getAll.useQuery();

  // const res = await fakeProducts.getProducts(filters);
  // const totalProducts = res.total_products;
  // const data: Data[] = res.products;

  return (
    <Table
      data={res.data ?? []}
      totalItems={res.data?.length ?? 0}
      columns={columns}
    />
  );
}
