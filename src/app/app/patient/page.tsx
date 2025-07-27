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
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Search, Filter, Phone, Mail, Calendar } from 'lucide-react';
import PageContainer from '@/components/layout/page-container';

const patients = [
  {
    id: 'P001',
    name: 'John Smith',
    phone: '+1 (555) 123-4567',
    email: 'john.smith@email.com',
    lastVisit: '2024-01-15',
    nextAppointment: '2024-01-25',
    status: 'Active',
    consultations: 3
  },
  {
    id: 'P002',
    name: 'Emma Wilson',
    phone: '+1 (555) 234-5678',
    email: 'emma.wilson@email.com',
    lastVisit: '2024-01-10',
    nextAppointment: null,
    status: 'Inactive',
    consultations: 1
  },
  {
    id: 'P003',
    name: 'Mike Johnson',
    phone: '+1 (555) 345-6789',
    email: 'mike.johnson@email.com',
    lastVisit: '2024-01-20',
    nextAppointment: '2024-01-28',
    status: 'Active',
    consultations: 5
  }
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <div className='flex-1 space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>Patients</h2>
            <p className='text-muted-foreground'>
              Manage your patient database and medical records
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className='mr-2 h-4 w-4' />
                Add Patient
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Add New Patient</DialogTitle>
                <DialogDescription>
                  Enter patient information to create a new record.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input id='name' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='phone' className='text-right'>
                    Phone
                  </Label>
                  <Input id='phone' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='email' className='text-right'>
                    Email
                  </Label>
                  <Input id='email' type='email' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='notes' className='text-right'>
                    Notes
                  </Label>
                  <Textarea id='notes' className='col-span-3' />
                </div>
              </div>
              <div className='flex justify-end gap-2'>
                <Button variant='outline'>Cancel</Button>
                <Button>Save Patient</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Patient Database</CardTitle>
            <CardDescription>
              Search and manage all registered patients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='mb-6 flex items-center gap-4'>
              <div className='relative flex-1'>
                <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
                <Input
                  placeholder='Search patients by name, phone, or email...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='pl-9'
                />
              </div>
              <Button variant='outline'>
                <Filter className='mr-2 h-4 w-4' />
                Filter
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Next Appointment</TableHead>
                  <TableHead>AI Consultations</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className='font-medium'>{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>
                      <div className='space-y-1'>
                        <div className='flex items-center gap-1 text-sm'>
                          <Phone className='h-3 w-3' />
                          {patient.phone}
                        </div>
                        <div className='text-muted-foreground flex items-center gap-1 text-sm'>
                          <Mail className='h-3 w-3' />
                          {patient.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>
                      {patient.nextAppointment ? (
                        <div className='flex items-center gap-1'>
                          <Calendar className='h-3 w-3' />
                          {patient.nextAppointment}
                        </div>
                      ) : (
                        <span className='text-muted-foreground'>
                          None scheduled
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant='secondary'>{patient.consultations}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          patient.status === 'Active' ? 'default' : 'secondary'
                        }
                      >
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View
                        </Button>
                        <Button variant='outline' size='sm'>
                          Edit
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
