'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Package, DollarSign, Clock } from 'lucide-react';
import PageContainer from '@/components/layout/page-container';

const services = [
  {
    id: 'SV001',
    name: 'Dental Cleaning',
    category: 'Preventive',
    price: 120,
    duration: 30,
    description: 'Professional teeth cleaning and polishing',
    status: 'Active',
    bookings: 45
  },
  {
    id: 'SV002',
    name: 'Root Canal Treatment',
    category: 'Restorative',
    price: 800,
    duration: 90,
    description: 'Complete root canal therapy',
    status: 'Active',
    bookings: 12
  },
  {
    id: 'SV003',
    name: 'Teeth Whitening',
    category: 'Cosmetic',
    price: 300,
    duration: 60,
    description: 'Professional teeth whitening treatment',
    status: 'Active',
    bookings: 28
  },
  {
    id: 'SV004',
    name: 'Dental Consultation',
    category: 'Consultation',
    price: 80,
    duration: 45,
    description: 'Initial consultation and examination',
    status: 'Active',
    bookings: 67
  }
];

const products = [
  {
    id: 'PR001',
    name: 'Electric Toothbrush',
    category: 'Oral Care',
    price: 89,
    stock: 25,
    description: 'Professional grade electric toothbrush',
    status: 'In Stock',
    sales: 15
  },
  {
    id: 'PR002',
    name: 'Whitening Toothpaste',
    category: 'Oral Care',
    price: 12,
    stock: 50,
    description: 'Professional whitening toothpaste',
    status: 'In Stock',
    sales: 32
  },
  {
    id: 'PR003',
    name: 'Night Guard',
    category: 'Protective',
    price: 150,
    stock: 8,
    description: 'Custom-fitted night guard for teeth grinding',
    status: 'Low Stock',
    sales: 6
  }
];

export default function Page() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <PageContainer>
      <div className='flex-1 space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>
              Services & Products
            </h2>
            <p className='text-muted-foreground'>
              Manage your clinic&apos;s services and product catalog
            </p>
          </div>
          <Button>
            <Plus className='mr-2 h-4 w-4' />
            Add {activeTab === 'services' ? 'Service' : 'Product'}
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value='services'>Services</TabsTrigger>
            <TabsTrigger value='products'>Products</TabsTrigger>
          </TabsList>

          <TabsContent value='services' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Medical Services</CardTitle>
                <CardDescription>
                  Manage your clinic&apos;s service offerings and pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Monthly Bookings</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell>
                          <div>
                            <p className='font-medium'>{service.name}</p>
                            <p className='text-muted-foreground text-sm'>
                              {service.description}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline'>{service.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className='flex items-center gap-1'>
                            <DollarSign className='h-3 w-3' />
                            {service.price}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className='flex items-center gap-1'>
                            <Clock className='h-3 w-3' />
                            {service.duration} min
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant='secondary'>{service.bookings}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant='default'>{service.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className='flex gap-2'>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant='outline' size='sm'>
                                  <Edit className='h-3 w-3' />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Service</DialogTitle>
                                  <DialogDescription>
                                    Update service information and pricing
                                  </DialogDescription>
                                </DialogHeader>
                                <div className='grid gap-4 py-4'>
                                  <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                      htmlFor='name'
                                      className='text-right'
                                    >
                                      Name
                                    </Label>
                                    <Input
                                      id='name'
                                      defaultValue={service.name}
                                      className='col-span-3'
                                    />
                                  </div>
                                  <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                      htmlFor='price'
                                      className='text-right'
                                    >
                                      Price
                                    </Label>
                                    <Input
                                      id='price'
                                      type='number'
                                      defaultValue={service.price}
                                      className='col-span-3'
                                    />
                                  </div>
                                  <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                      htmlFor='duration'
                                      className='text-right'
                                    >
                                      Duration
                                    </Label>
                                    <Input
                                      id='duration'
                                      type='number'
                                      defaultValue={service.duration}
                                      className='col-span-3'
                                    />
                                  </div>
                                  <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                      htmlFor='description'
                                      className='text-right'
                                    >
                                      Description
                                    </Label>
                                    <Textarea
                                      id='description'
                                      defaultValue={service.description}
                                      className='col-span-3'
                                    />
                                  </div>
                                </div>
                                <div className='flex justify-end gap-2'>
                                  <Button variant='outline'>Cancel</Button>
                                  <Button>Save Changes</Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant='outline' size='sm'>
                              <Trash2 className='h-3 w-3' />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='products' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Product Catalog</CardTitle>
                <CardDescription>
                  Manage your clinic&apos;s product inventory and sales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Monthly Sales</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className='flex items-center gap-3'>
                            <Package className='text-muted-foreground h-8 w-8' />
                            <div>
                              <p className='font-medium'>{product.name}</p>
                              <p className='text-muted-foreground text-sm'>
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline'>{product.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className='flex items-center gap-1'>
                            <DollarSign className='h-3 w-3' />
                            {product.price}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              product.stock < 10 ? 'destructive' : 'secondary'
                            }
                          >
                            {product.stock}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant='secondary'>{product.sales}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              product.status === 'In Stock'
                                ? 'default'
                                : 'destructive'
                            }
                          >
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className='flex gap-2'>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant='outline' size='sm'>
                                  <Edit className='h-3 w-3' />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Product</DialogTitle>
                                  <DialogDescription>
                                    Update product information and inventory
                                  </DialogDescription>
                                </DialogHeader>
                                <div className='grid gap-4 py-4'>
                                  <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                      htmlFor='productName'
                                      className='text-right'
                                    >
                                      Name
                                    </Label>
                                    <Input
                                      id='productName'
                                      defaultValue={product.name}
                                      className='col-span-3'
                                    />
                                  </div>
                                  <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                      htmlFor='productPrice'
                                      className='text-right'
                                    >
                                      Price
                                    </Label>
                                    <Input
                                      id='productPrice'
                                      type='number'
                                      defaultValue={product.price}
                                      className='col-span-3'
                                    />
                                  </div>
                                  <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                      htmlFor='stock'
                                      className='text-right'
                                    >
                                      Stock
                                    </Label>
                                    <Input
                                      id='stock'
                                      type='number'
                                      defaultValue={product.stock}
                                      className='col-span-3'
                                    />
                                  </div>
                                  <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                      htmlFor='productDescription'
                                      className='text-right'
                                    >
                                      Description
                                    </Label>
                                    <Textarea
                                      id='productDescription'
                                      defaultValue={product.description}
                                      className='col-span-3'
                                    />
                                  </div>
                                </div>
                                <div className='flex justify-end gap-2'>
                                  <Button variant='outline'>Cancel</Button>
                                  <Button>Save Changes</Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant='outline' size='sm'>
                              <Trash2 className='h-3 w-3' />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
