import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Plus, Calendar, Clock, Users, Star } from 'lucide-react';
import PageContainer from '@/components/layout/page-container';

const doctors = [
  {
    id: 'D001',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Dentistry',
    email: 'sarah.johnson@clinic.com',
    phone: '+1 (555) 100-1001',
    schedule: 'Mon-Fri 9:00-17:00',
    patients: 156,
    rating: 4.9,
    status: 'Available',
    todayAppointments: 8,
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 'D002',
    name: 'Dr. Michael Brown',
    specialty: 'Orthodontics',
    email: 'michael.brown@clinic.com',
    phone: '+1 (555) 100-1002',
    schedule: 'Tue-Sat 10:00-18:00',
    patients: 203,
    rating: 4.8,
    status: 'In Surgery',
    todayAppointments: 6,
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 'D003',
    name: 'Dr. Emily Davis',
    specialty: 'Pediatric Dentistry',
    email: 'emily.davis@clinic.com',
    phone: '+1 (555) 100-1003',
    schedule: 'Mon-Thu 8:00-16:00',
    patients: 89,
    rating: 4.9,
    status: 'Available',
    todayAppointments: 5,
    avatar: '/placeholder.svg?height=40&width=40'
  }
];

const staff = [
  {
    id: 'S001',
    name: 'Jennifer Wilson',
    role: 'Dental Hygienist',
    email: 'jennifer.wilson@clinic.com',
    phone: '+1 (555) 200-2001',
    schedule: 'Mon-Fri 8:00-16:00',
    status: 'Available'
  },
  {
    id: 'S002',
    name: 'Robert Garcia',
    role: 'Receptionist',
    email: 'robert.garcia@clinic.com',
    phone: '+1 (555) 200-2002',
    schedule: 'Mon-Fri 7:00-15:00',
    status: 'Available'
  }
];

export default function Page() {
  return (
    <PageContainer>
      <div className='flex-1 space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>
              Doctors & Staff
            </h2>
            <p className='text-muted-foreground'>
              Manage your medical team and their schedules
            </p>
          </div>
          <div className='flex gap-2'>
            <Button variant='outline'>
              <Calendar className='mr-2 h-4 w-4' />
              Manage Schedules
            </Button>
            <Button>
              <Plus className='mr-2 h-4 w-4' />
              Add Staff
            </Button>
          </div>
        </div>

        {/* Doctors Section */}
        <Card>
          <CardHeader>
            <CardTitle>Doctors</CardTitle>
            <CardDescription>
              Medical professionals and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Specialty</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Today&apos;s Appointments</TableHead>
                  <TableHead>Patients</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctors.map((doctor) => (
                  <TableRow key={doctor.id}>
                    <TableCell>
                      <div className='flex items-center gap-3'>
                        <Avatar>
                          <AvatarImage
                            src={doctor.avatar || '/placeholder.svg'}
                          />
                          <AvatarFallback>
                            {doctor.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className='font-medium'>{doctor.name}</p>
                          <p className='text-muted-foreground text-sm'>
                            {doctor.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{doctor.specialty}</TableCell>
                    <TableCell>
                      <div className='space-y-1'>
                        <p className='text-sm'>{doctor.email}</p>
                        <p className='text-muted-foreground text-sm'>
                          {doctor.phone}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center gap-1'>
                        <Clock className='h-3 w-3' />
                        {doctor.schedule}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant='secondary'>
                        {doctor.todayAppointments}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center gap-1'>
                        <Users className='h-3 w-3' />
                        {doctor.patients}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center gap-1'>
                        <Star className='h-3 w-3 fill-yellow-400 text-yellow-400' />
                        {doctor.rating}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          doctor.status === 'Available'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {doctor.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View
                        </Button>
                        <Button variant='outline' size='sm'>
                          Schedule
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Staff Section */}
        <Card>
          <CardHeader>
            <CardTitle>Support Staff</CardTitle>
            <CardDescription>
              Administrative and support team members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staff.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div>
                        <p className='font-medium'>{member.name}</p>
                        <p className='text-muted-foreground text-sm'>
                          {member.id}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <div className='space-y-1'>
                        <p className='text-sm'>{member.email}</p>
                        <p className='text-muted-foreground text-sm'>
                          {member.phone}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center gap-1'>
                        <Clock className='h-3 w-3' />
                        {member.schedule}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant='default'>{member.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          Edit
                        </Button>
                        <Button variant='outline' size='sm'>
                          Schedule
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
