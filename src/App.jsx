import React from "react";
import { Route, Routes } from "react-router-dom";
// Auth
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import ResetPass from "./pages/auth/ResetPass";
import ChangePass from "./pages/auth/ChangePass";
// User
import Home from "./pages/user/Home";
// Students
import AddStudent from "./pages/admin/student/AddStudent";
import EditStudent from "./pages/admin/student/EditStudent";
import AllStudents from "./pages/admin/student/AllStudents";
// Instructors
import AddInstructor from "./pages/admin/instructor/AddInstructor";
import EditInstructor from "./pages/admin/instructor/EditInstructor";
import AllInstructors from "./pages/admin/instructor/AllInstructors";
// Courses
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import AllCourses from "./pages/admin/course/AllCourses";


function App() {
  return (
    <>
      {/* Auth Routes */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/change-password" element={<ChangePass />} />
     

      {/* Admin Routes  */}
     
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Students Routes */}
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/all-students" element={<AllStudents />} />

        {/* Instructors Routes */}

        <Route path="/add-instructor" element={<AddInstructor />} />
        <Route path="/edit-instructor" element={<EditInstructor />} />
        <Route path="/all-instructors" element={<AllInstructors />} />

        {/* Course Routes */}
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/edit-course/:id" element={<EditCourse />} />
        <Route path="/all-courses" element={<AllCourses />} />
     

      {/* User Routes */}
     
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
