import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import "../styles/AddCourse.css"; // Import your stylesheet

function AddCourse() {
    const navigate = useNavigate();
     const [course, setCourse] = useState({
    name: "",
    semesters: [
      {
        name: "",
        subjects: [
          {
            name: "",
            marks: "",
          },
        ],
      },
    ],
  });

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSemesterChange = (e, semesterIndex) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => {
      const updatedSemesters = [...prevCourse.semesters];
      updatedSemesters[semesterIndex] = {
        ...updatedSemesters[semesterIndex],
        [name]: value,
      };
      return {
        ...prevCourse,
        semesters: updatedSemesters,
      };
    });
  };

  const handleSubjectChange = (e, semesterIndex, subjectIndex) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => {
      const updatedSemesters = [...prevCourse.semesters];
      const updatedSubjects = [...updatedSemesters[semesterIndex].subjects];
      updatedSubjects[subjectIndex] = {
        ...updatedSubjects[subjectIndex],
        [name]: value,
      };
      updatedSemesters[semesterIndex] = {
        ...updatedSemesters[semesterIndex],
        subjects: updatedSubjects,
      };
      return {
        ...prevCourse,
        semesters: updatedSemesters,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedUser = localStorage.getItem("sessionToken");
    try {
      // Send the course data to the Spring Boot backend
      const courseResponse = await axios.post(
        `http://localhost:8080/course/${loggedUser}/addCourse`,
        {
          courseName: course.name,
          no_of_semesters: course.semesters.length,
        }
      );
      console.log(courseResponse.data);
      // Iterate through semesters and add them to the course
      for (const semester of course.semesters) {
        const semesterResponse = await axios.post(
          `http://localhost:8080/semester/${courseResponse.data.course_id}/addSemester`,
          {
            sem: parseInt(semester.name),
          }
        );
        console.log(semesterResponse.data);
        // Iterate through subjects and add them to the semester
        for (const subject of semester.subjects) {
          await axios.post(
            `http://localhost:8080/subject/${semesterResponse.data.semesterId}/addSubject`,
            {
              name: subject.name,
            }
          );
          await axios.post(`http://localhost:8080/marks/addMarks`, {
            userId: loggedUser,
            subjectName: subject.name,
            semesterId: semesterResponse.data.semesterId,
            courseId: courseResponse.data.course_id,
            marks: subject.marks,
          });
        }
      }
      setCourse({
        name: "",
        semesters: [
          {
            name: "",
            subjects: [
              {
                name: "",
                marks: "",
              },
            ],
          },
        ],
      });
      navigate("/home/education/MyCourse");
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  const handleDeleteSubject = (semesterIndex, subjectIndex) => {
    setCourse((prevCourse) => {
      const updatedSemesters = [...prevCourse.semesters];
      const updatedSubjects = [...updatedSemesters[semesterIndex].subjects];
      updatedSubjects.splice(subjectIndex, 1);
      updatedSemesters[semesterIndex] = {
        ...updatedSemesters[semesterIndex],
        subjects: updatedSubjects,
      };
      return {
        ...prevCourse,
        semesters: updatedSemesters,
      };
    });
  };

  const handleDeleteSemester = (semesterIndex) => {
    setCourse((prevCourse) => {
      const updatedSemesters = [...prevCourse.semesters];
      updatedSemesters.splice(semesterIndex, 1);
      return {
        ...prevCourse,
        semesters: updatedSemesters,
      };
    });
  };

  return (
    <>
      <main>
        <div className="addCourseContainer">
          <div className="education-container">
            <h1 className="education-heading">Course</h1>
            <form onSubmit={handleSubmit}>
              <div className="course">
                <h3>Course Information</h3>
                <div>
                  <label>Course Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={course.name}
                    onChange={handleCourseChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>
              {course.semesters.map((semester, semesterIndex) => (
                <div key={semesterIndex} className="semester">
                  <h4>Semester Information</h4>
                  <div>
                    <label>Semester:</label>
                    <input
                      type="number"
                      name="name"
                      value={semester.name}
                      onChange={(e) => handleSemesterChange(e, semesterIndex)}
                      className="input-field"
                      required
                    />
                  </div>
                  {semester.subjects.map((subject, subjectIndex) => (
                    <div key={subjectIndex} className="subject">
                      <h5>Subject Information</h5>
                      <div>
                        <label>Subject Name:</label>
                        <input
                          type="text"
                          name="name"
                          value={subject.name}
                          onChange={(e) =>
                            handleSubjectChange(e, semesterIndex, subjectIndex)
                          }
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label>Marks:</label>
                        <input
                          type="number"
                          name="marks"
                          value={subject.marks}
                          onChange={(e) =>
                            handleSubjectChange(e, semesterIndex, subjectIndex)
                          }
                          className="input-field"
                          required
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteSubject(semesterIndex, subjectIndex)
                        }
                        className="action-button delete-button"
                      >
                        Delete Subject
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setCourse((prevCourse) => {
                        const updatedSemesters = [...prevCourse.semesters];
                        updatedSemesters[semesterIndex].subjects.push({
                          name: "",
                          marks: "",
                        });
                        return {
                          ...prevCourse,
                          semesters: updatedSemesters,
                        };
                      });
                    }}
                    className="action-button"
                  >
                    Add Subject
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteSemester(semesterIndex)}
                    className="action-button delete-button"
                  >
                    Delete Semester
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setCourse((prevCourse) => ({
                    ...prevCourse,
                    semesters: [
                      ...prevCourse.semesters,
                      {
                        name: "",
                        subjects: [
                          {
                            name: "",
                            marks: "",
                          },
                        ],
                      },
                    ],
                  }));
                }}
                className="action-button"
              >
                Add Semester
              </button>
              <button type="submit" className="action-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddCourse;
