import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/mycouse.css"
function MyCourses() {
  const [academicData, setAcademicData] = useState([]);
  const loggedUser = localStorage.getItem("sessionToken");

  useEffect(() => {
    // Fetch academic data from the backend when the component mounts
    axios.get(`http://localhost:8080/course/getCourse/${loggedUser}`)
    axios.get('http://localhost:8080/semester/getAllSemester')
    axios.get('http://localhost:8080/subject/getAllSubjects')
     axios.get(`http://localhost:8080/marks/${loggedUser}`)
      .then((response) => {
        setAcademicData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loggedUser]);
 return (
    <div className="my-academics-container">
      <h1>My Academics</h1>
      <table className="academic-table">
       <thead>
          <tr>
            <th>Course</th>
            <th>Semester</th>
            <th>Subject Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {academicData.map((academic, academicIndex) => (
            <tr key={academicIndex}>
              <td>{academic.course.courseName}</td>
              <td>{academic.semester.sem}</td>
              <td>{academic.subject.subjectName}</td>
              <td>{academic.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MyCourses;
