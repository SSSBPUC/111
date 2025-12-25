import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentProvider } from "@/contexts/ContentContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import CampusLife from "./pages/CampusLife";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Admin from "./pages/Admin";
import Staff from "./pages/Staff";
import StaffAdmin from "./pages/StaffAdmin";
import PortalAdmin from "./pages/PortalAdmin";
import PortalAdminStudents from "./pages/PortalAdminStudents";
import PortalAdminStaff from "./pages/PortalAdminStaff";
import Auth from "./pages/Auth";
import PortalLogin from "./pages/PortalLogin";
import Portal from "./pages/Portal";
import NotFound from "./pages/NotFound";
import PortalStaffLayout from "./pages/PortalStaffLayout";
import PortalStaffDashboard from "./pages/PortalStaffDashboard";
import PortalLectures from "./pages/PortalLectures";
import PortalStaffAttendance from "./pages/PortalStaffAttendance";
import PortalStaffExam from "./pages/PortalStaffExam";
import PortalStaffRatings from "./pages/PortalStaffRatings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ContentProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/about" element={<About />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/staff" element={<StaffAdmin />} />
              <Route path="/admin/portal" element={<PortalAdminStudents />} />
              <Route path="/admin/portal-students" element={<PortalAdminStudents />} />
              <Route path="/admin/portal-staff" element={<PortalAdminStaff />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/portal-login" element={<PortalLogin />} />
              <Route path="/portal" element={<Portal />} />
              <Route path="/portal/staff" element={<PortalStaffLayout />}>
                <Route index element={<PortalStaffDashboard />} />
                <Route path="lectures" element={<PortalLectures />} />
                <Route path="attendance" element={<PortalStaffAttendance />} />
                <Route path="exam" element={<PortalStaffExam />} />
                <Route path="ratings" element={<PortalStaffRatings />} />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ContentProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
