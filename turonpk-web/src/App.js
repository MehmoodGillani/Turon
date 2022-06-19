import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AdminCources } from "./admin/AdminCources";
import { AdminHome } from "./admin/AdminHome";
import { AdminLogin } from "./admin/AdminLogin";
import { AdminStudentDetail } from "./admin/AdminStudentDetail";
import { AdminStudents } from "./admin/AdminStudents";
import { AdminTutorDetail } from "./admin/AdminTutorDetail";
import { AdminTutors } from "./admin/AdminTutors";
import { CourseDetail } from "./CourseDetail/CourseDetail";
import { Courses } from "./Courses/Courses";
import { CustomerHome } from "./Customer/CustomerHome";
import { CustomerProfile } from "./Customer/CustomerProfile";
import { CustomerRequestDetail } from "./Customer/CustomerRequestDetail";
import { CustomerRequests } from "./Customer/CustomerRequests";
import { CustomerTutorDetail } from "./Customer/CustomerTutorDetail";
import { CustomerTutor } from "./Customer/CustomerTutors";
import { HomePage } from "./Home/HomePage";
import TestHome from "./Home/TestHome";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
import { TutorDetail } from "./TutorDetail/TutorDetail";
import { SendRequest } from "./TutorPannel/SendRequest";
import { StudentDetail } from "./TutorPannel/StudentDetail";
import { Students } from "./TutorPannel/Students";
import { TutorHome } from "./TutorPannel/TutorHome";
import { TutorProfile } from "./TutorPannel/TutorProfile";
import { Tutors } from "./Tutors/Tutors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<HomePage/>} />
          <Route path="/tutors" element={<Tutors/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/courseDetail" element={<CourseDetail/>}></Route>
          <Route path="/tutorDetail" element={<TutorDetail/>}></Route>
          <Route path="/tutorDetail/login" element={<Login/>}></Route>
          <Route path="/customerHome" element={<CustomerHome/>}></Route>
          <Route path="/customerTutorDetail" element={<CustomerTutorDetail/>}></Route>
          <Route path="/customerTutors" element={<CustomerTutor/>}></Route>
          <Route path="/customerRequest" element={<CustomerRequests/>}></Route>
          <Route path="/customerProfile" element={<CustomerProfile/>}></Route>
          <Route path="/customerRequestDetail" element={<CustomerRequestDetail/>}></Route>
          <Route path="/tutorHome" element={<TutorHome/>}></Route>
          <Route path="/sendRequest" element={<SendRequest/>}></Route>
          <Route path="/studnets" element={<Students/>}></Route>
          <Route path="/tutorProfile" element={<TutorProfile/>}></Route>
          <Route path="/studentDetail" element={<StudentDetail/>}></Route>
          <Route path="/admin" element={<AdminLogin/>}></Route>
          <Route path="/adminHome" element={<AdminHome/>}></Route>
          <Route path="/admintutors" element={<AdminTutors/>}></Route>
          <Route path="/admincourses" element={<AdminCources/>}></Route>
          <Route path="/adminstudents" element={<AdminStudents/>}></Route>
          <Route path="/admintutordetail" element={<AdminTutorDetail/>}></Route>
          <Route path="/adminstudentdetail" element={<AdminStudentDetail/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
