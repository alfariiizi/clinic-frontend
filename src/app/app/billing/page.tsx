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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  DollarSign,
  CreditCard,
  FileText,
  Download,
  Send,
  Search,
  Filter,
  TrendingUp
} from 'lucide-react';
import PageContainer from '@/components/layout/page-container';

const invoices = [
  {
    id: 'INV-001',
    patient: 'John Smith',
    service: 'Dental Cleaning',
    amount: 120,
    date: '2024-01-15',
    dueDate: '2024-01-30',
    status: 'Paid',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'INV-002',
    patient: 'Emma Wilson',
    service: 'Root Canal Treatment',
    amount: 800,
    date: '2024-01-10',
    dueDate: '2024-01-25',
    status: 'Pending',
    paymentMethod: 'Insurance'
  },
  {
    id: 'INV-003',
    patient: 'Mike Johnson',
    service: 'Teeth Whitening',
    amount: 300,
    date: '2024-01-20',
    dueDate: '2024-02-05',
    status: 'Overdue',
    paymentMethod: 'Cash'
  },
  {
    id: 'INV-004',
    patient: 'Sarah Davis',
    service: 'Consultation',
    amount: 80,
    date: '2024-01-22',
    dueDate: '2024-02-06',
    status: 'Draft',
    paymentMethod: 'Credit Card'
  }
];

const payments = [
  {
    id: 'PAY-001',
    patient: 'John Smith',
    amount: 120,
    date: '2024-01-16',
    method: 'Credit Card',
    status: 'Completed',
    reference: 'ch_1234567890'
  },
  {
    id: 'PAY-002',
    patient: 'Alice Brown',
    amount: 300,
    date: '2024-01-18',
    method: 'Digital Wallet',
    status: 'Completed',
    reference: 'dw_0987654321'
  },
  {
    id: 'PAY-003',
    patient: 'Tom Wilson',
    amount: 150,
    date: '2024-01-20',
    method: 'Bank Transfer',
    status: 'Processing',
    reference: 'bt_1122334455'
  }
];

export default function Page() {
  return (
    <PageContainer>
      <div className='flex-1 space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>
              Billing & Payments
            </h2>
            <p className='text-muted-foreground'>
              Manage invoices, payments, and financial records
            </p>
          </div>
          <div className='flex gap-2'>
            <Button variant='outline'>
              <Download className='mr-2 h-4 w-4' />
              Export
            </Button>
            <Button>
              <FileText className='mr-2 h-4 w-4' />
              New Invoice
            </Button>
          </div>
        </div>

        {/* Financial Overview */}
        <div className='grid gap-4 md:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Revenue
              </CardTitle>
              <DollarSign className='text-muted-foreground h-4 w-4' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>$12,450</div>
              <p className='text-muted-foreground text-xs'>
                <span className='text-green-600'>+8%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Outstanding</CardTitle>
              <FileText className='text-muted-foreground h-4 w-4' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>$2,340</div>
              <p className='text-muted-foreground text-xs'>
                <span className='text-red-600'>3</span> overdue invoices
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Paid Today</CardTitle>
              <CreditCard className='text-muted-foreground h-4 w-4' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>$890</div>
              <p className='text-muted-foreground text-xs'>
                <span className='text-blue-600'>5</span> transactions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Collection Rate
              </CardTitle>
              <TrendingUp className='text-muted-foreground h-4 w-4' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>94.2%</div>
              <p className='text-muted-foreground text-xs'>
                <span className='text-green-600'>+2.1%</span> improvement
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Invoices */}
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Recent Invoices</CardTitle>
                  <CardDescription>
                    Latest billing and invoice status
                  </CardDescription>
                </div>
                <div className='flex gap-2'>
                  <Button variant='outline' size='sm'>
                    <Filter className='h-4 w-4' />
                  </Button>
                  <Button variant='outline' size='sm'>
                    <Search className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className='flex items-center justify-between rounded-lg border p-3'
                  >
                    <div className='space-y-1'>
                      <div className='flex items-center gap-2'>
                        <span className='font-medium'>{invoice.id}</span>
                        <Badge
                          variant={
                            invoice.status === 'Paid'
                              ? 'default'
                              : invoice.status === 'Pending'
                                ? 'secondary'
                                : invoice.status === 'Overdue'
                                  ? 'destructive'
                                  : 'outline'
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                      <p className='text-muted-foreground text-sm'>
                        {invoice.patient}
                      </p>
                      <p className='text-muted-foreground text-sm'>
                        {invoice.service}
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='font-medium'>${invoice.amount}</p>
                      <p className='text-muted-foreground text-sm'>
                        Due: {invoice.dueDate}
                      </p>
                      <div className='mt-1 flex gap-1'>
                        <Button variant='outline' size='sm'>
                          <FileText className='h-3 w-3' />
                        </Button>
                        <Button variant='outline' size='sm'>
                          <Send className='h-3 w-3' />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>Latest payment transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {payments.map((payment) => (
                  <div
                    key={payment.id}
                    className='flex items-center justify-between rounded-lg border p-3'
                  >
                    <div className='space-y-1'>
                      <div className='flex items-center gap-2'>
                        <CreditCard className='h-4 w-4' />
                        <span className='font-medium'>{payment.patient}</span>
                      </div>
                      <p className='text-muted-foreground text-sm'>
                        {payment.method}
                      </p>
                      <p className='text-muted-foreground text-xs'>
                        {payment.reference}
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='font-medium'>${payment.amount}</p>
                      <p className='text-muted-foreground text-sm'>
                        {payment.date}
                      </p>
                      <Badge
                        variant={
                          payment.status === 'Completed'
                            ? 'default'
                            : 'secondary'
                        }
                        className='mt-1'
                      >
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Invoice Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Invoices</CardTitle>
            <CardDescription>Complete invoice management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='mb-6 flex items-center gap-4'>
              <div className='relative flex-1'>
                <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
                <Input placeholder='Search invoices...' className='pl-9' />
              </div>
              <Select defaultValue='all'>
                <SelectTrigger className='w-32'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All Status</SelectItem>
                  <SelectItem value='paid'>Paid</SelectItem>
                  <SelectItem value='pending'>Pending</SelectItem>
                  <SelectItem value='overdue'>Overdue</SelectItem>
                  <SelectItem value='draft'>Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className='font-medium'>{invoice.id}</TableCell>
                    <TableCell>{invoice.patient}</TableCell>
                    <TableCell>{invoice.service}</TableCell>
                    <TableCell>${invoice.amount}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          invoice.status === 'Paid'
                            ? 'default'
                            : invoice.status === 'Pending'
                              ? 'secondary'
                              : invoice.status === 'Overdue'
                                ? 'destructive'
                                : 'outline'
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          <FileText className='h-3 w-3' />
                        </Button>
                        <Button variant='outline' size='sm'>
                          <Send className='h-3 w-3' />
                        </Button>
                        <Button variant='outline' size='sm'>
                          <Download className='h-3 w-3' />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
