import { fakeProducts, Product } from '@/constants/mock-api';
import { notFound } from 'next/navigation';
import Form from './form';

type ViewPageProps = {
  productId: string;
};

export default async function ViewPage({ productId }: ViewPageProps) {
  let product = null;
  let pageTitle = 'Tambah Dokter Baru';

  if (productId !== 'new') {
    const data = await fakeProducts.getProductById(Number(productId));
    product = data.product as Product;
    if (!product) {
      notFound();
    }
    pageTitle = `Edit Dokter`;
  }

  return <Form initialData={product} pageTitle={pageTitle} />;
}
