import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Bell, CalendarDays, NotebookPen, BookOpenCheck, Megaphone } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';

interface PortalUser {
  id: string;
  username: string;
  full_name: string;
  user_type: string;
  email?: string;
  department?: string;
}

interface UpdateItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

export default function Portal() {
  const [user, setUser] = useState<PortalUser | null>(null);
  const [notices, setNotices] = useState<UpdateItem[]>([]);
  const [events, setEvents] = useState<UpdateItem[]>([]);
  const [loadingUpdates, setLoadingUpdates] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('portal_user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser) as PortalUser;
      setUser(parsed);
      if (parsed.user_type === 'staff') {
        fetchUpdates();
      }
    } else {
      navigate('/portal-login');
    }
  }, [navigate]);

  useEffect(() => {
    document.title = user?.user_type === 'staff'
      ? 'Staff Portal Dashboard'
      : user?.user_type === 'student'
        ? 'Student Portal Dashboard'
        : 'Portal';
  }, [user]);

  const fetchUpdates = async () => {
    setLoadingUpdates(true);
    const { data, error } = await supabase
      .from('updates')
      .select('id, title, description, category, date, is_published')
      .eq('is_published', true)
      .order('date', { ascending: false })
      .limit(10);

    if (!error && data) {
      const mapped = (data as any[]).map((row) => ({
        id: row.id,
        title: row.title,
        description: row.description,
        category: row.category,
        date: row.date,
      }));

      setNotices(mapped.filter((u) => u.category?.toLowerCase() === 'notice'));
      setEvents(mapped.filter((u) => u.category?.toLowerCase() === 'event'));
    }

    setLoadingUpdates(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('portal_user');
    navigate('/portal-login');
  };

  if (!user) {
    return null;
  }

  const isStaff = user.user_type === 'staff';

  if (!isStaff) {
    // Existing simple profile view for students and other user types
    return (
      <Layout>
        <section className="gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome, {user.full_name}!
            </h1>
            <p className="text-lg text-muted-foreground">
              {user.user_type === 'staff' ? 'Staff Portal' : 'Student Portal'}
            </p>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="text-primary" size={24} />
                    Your Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Username</p>
                      <p className="font-medium">{user.username}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">{user.full_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-medium capitalize">{user.user_type}</p>
                    </div>
                    {user.department && (
                      <div>
                        <p className="text-sm text-muted-foreground">Department</p>
                        <p className="font-medium">{user.department}</p>
                      </div>
                    )}
                    {user.email && (
                      <div className="col-span-2">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{user.email}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <Button variant="outline" onClick={handleLogout} className="gap-2">
                      <LogOut size={16} />
                      Logout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Staff dashboard view inspired by the provided design
  return (
    <Layout>
      {/* Top banner */}
      <section className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 border-b">
        <div className="container mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Teacher / Dashboard</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Welcome back{' '}
              <span className="text-primary uppercase tracking-wide">{user.full_name}</span>
            </h1>
            {user.department && (
              <p className="mt-2 text-sm text-muted-foreground">
                {user.department} Department
              </p>
            )}
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="text-primary" size={20} />
              </div>
              <div className="text-right text-sm">
                <p className="text-muted-foreground">Logged in as</p>
                <p className="font-medium">{user.username}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut size={14} />
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 space-y-6">
          {/* First row: Today's Lecture + Homework */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpenCheck className="text-primary" size={20} />
                  Today's Lecture
                </CardTitle>
                <span className="text-xs text-muted-foreground">Class schedule</span>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[40px] text-xs">#</TableHead>
                        <TableHead className="text-xs">Subject</TableHead>
                        <TableHead className="text-xs">Standard</TableHead>
                        <TableHead className="text-xs">Period</TableHead>
                        <TableHead className="text-xs">Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={5} className="py-10 text-center text-sm text-muted-foreground">
                          Enjoy your free time today! No lectures scheduled.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <NotebookPen className="text-primary" size={20} />
                  Homework
                </CardTitle>
                <span className="text-xs text-muted-foreground">Assignments overview</span>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs">Title</TableHead>
                        <TableHead className="text-xs">Class</TableHead>
                        <TableHead className="text-xs">Subject</TableHead>
                        <TableHead className="text-xs">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={4} className="py-10 text-center text-sm text-muted-foreground">
                          No homework entries found yet. Create homework from the admin panel.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exam section */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CalendarDays className="text-primary" size={20} />
                Exams
              </CardTitle>
              <span className="text-xs text-muted-foreground">
                Upcoming exams for your classes will appear here
              </span>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">Exam</TableHead>
                      <TableHead className="text-xs">Class</TableHead>
                      <TableHead className="text-xs">Subject</TableHead>
                      <TableHead className="text-xs">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={4} className="py-8 text-center text-sm text-muted-foreground">
                        No upcoming exams scheduled yet. Once exams are added in the admin, they will display here.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Notice Board + Events from backend */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Megaphone className="text-primary" size={20} />
                  Notice Board
                </CardTitle>
                <Bell className="text-muted-foreground" size={18} />
              </CardHeader>
              <CardContent>
                {loadingUpdates ? (
                  <p className="py-6 text-center text-sm text-muted-foreground">Loading notices...</p>
                ) : notices.length === 0 ? (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    Stay tuned! New notices will appear here.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {notices.map((notice) => (
                      <li key={notice.id} className="border rounded-md px-3 py-2 bg-background/60">
                        <p className="text-sm font-medium">{notice.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{notice.description}</p>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          {new Date(notice.date).toLocaleDateString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CalendarDays className="text-primary" size={20} />
                  Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loadingUpdates ? (
                  <p className="py-6 text-center text-sm text-muted-foreground">Loading events...</p>
                ) : events.length === 0 ? (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    No events planned yet. Check back soon!
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {events.map((event) => (
                      <li key={event.id} className="border rounded-md px-3 py-2 bg-background/60">
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
