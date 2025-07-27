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
import { Calendar } from '@/components/ui/calendar';
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
import { Clock, User, Stethoscope, Plus, Filter } from 'lucide-react';
import PageContainer from '@/components/layout/page-container';

const appointments = [
  {
    id: 'A001',
    time: '09:00',
    patient: 'John Smith',
    doctor: 'Dr. Sarah Johnson',
    service: 'Dental Cleaning',
    status: 'confirmed',
    duration: '30 min',
    notes: 'Regular checkup'
  },
  {
    id: 'A002',
    time: '10:30',
    patient: 'Emma Wilson',
    doctor: 'Dr. Michael Brown',
    service: 'Consultation',
    status: 'pending',
    duration: '45 min',
    notes: 'First visit consultation'
  },
  {
    id: 'A003',
    time: '11:45',
    patient: 'Mike Johnson',
    doctor: 'Dr. Sarah Johnson',
    service: 'Follow-up',
    status: 'confirmed',
    duration: '20 min',
    notes: 'Post-treatment checkup'
  },
  {
    id: 'A004',
    time: '14:00',
    patient: 'Sarah Davis',
    doctor: 'Dr. Michael Brown',
    service: 'Root Canal',
    status: 'confirmed',
    duration: '90 min',
    notes: 'Complex procedure'
  }
];

export default function Page() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAppointments = appointments.filter((appointment) => {
    if (statusFilter === 'all') return true;
    return appointment.status === statusFilter;
  });

  return (
    <PageContainer>
      <div className='flex-1 space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>Appointments</h2>
            <p className='text-muted-foreground'>
              Manage patient appointments and scheduling
            </p>
          </div>
          <Button>
            <Plus className='mr-2 h-4 w-4' />
            Book Appointment
          </Button>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          <Card className='md:col-span-2'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Today&apos;s Schedule</CardTitle>
                  <CardDescription>
                    {selectedDate?.toDateString() || 'Select a date'}
                  </CardDescription>
                </div>
                <div className='flex items-center gap-2'>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className='w-32'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='all'>All Status</SelectItem>
                      <SelectItem value='confirmed'>Confirmed</SelectItem>
                      <SelectItem value='pending'>Pending</SelectItem>
                      <SelectItem value='cancelled'>Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant='outline' size='sm'>
                    <Filter className='mr-2 h-4 w-4' />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Doctor</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell className='font-medium'>
                        <div className='flex items-center gap-2'>
                          <Clock className='h-4 w-4' />
                          {appointment.time}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <User className='h-4 w-4' />
                          {appointment.patient}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <Stethoscope className='h-4 w-4' />
                          {appointment.doctor}
                        </div>
                      </TableCell>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>{appointment.duration}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            appointment.status === 'confirmed'
                              ? 'default'
                              : appointment.status === 'pending'
                                ? 'secondary'
                                : 'destructive'
                          }
                        >
                          {appointment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className='flex gap-2'>
                          <Button variant='outline' size='sm'>
                            Edit
                          </Button>
                          <Button variant='outline' size='sm'>
                            Cancel
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>
                Select a date to view appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
                className='rounded-md border'
              />

              <div className='mt-4 space-y-2'>
                <h4 className='font-medium'>Quick Stats</h4>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>Total Today:</span>
                    <span className='font-medium'>4</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Confirmed:</span>
                    <span className='font-medium text-green-600'>3</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Pending:</span>
                    <span className='font-medium text-yellow-600'>1</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Available Slots:</span>
                    <span className='font-medium text-blue-600'>6</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
