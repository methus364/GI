// import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/user/Navbar";

const CourseOverview = () => {
  const courses = [
    {
      id: 1,
      title: "หลักสูตร ข้าวเหนียวซิวเกลี้ยงเมืองเลย",
      description: "เรียนรู้ข้อมูลผลิตภัณฑ์ Gi เบื้องต้น",
      date: "1 เมษายน 2025",
      time: "10:00 AM - 12:00 PM",
      image: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "หลักสูตร 2",
      description: "การใช้งานข้อมูลผลิตภัณฑ์ Gi อย่างมีประสิทธิภาพ",
      date: "5 เมษายน 2025",
      time: "02:00 PM - 04:00 PM",
      image: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "หลักสูตร 3",
      description: "การวิเคราะห์ข้อมูลผลิตภัณฑ์ Gi",
      date: "10 เมษายน 2025",
      time: "09:00 AM - 11:00 AM",
      image: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  return (
    <div>
        <Navbar/>
      {/* Header Section */}
      <div
        className="container-fluid bg-dark d-flex flex-column align-items-center justify-content-center"
        style={{
          height: "80vh",
          backgroundColor: "#333", // สีพื้นหลังที่คุณต้องการ
          padding: "20px",
        }}
      >
        <div
          className="text-light d-flex flex-column align-items-center justify-content-center"
          style={{ height: "65vh", width: "80vh" }}
        >
          <h1 className="display-3 text-center" style={{ fontSize: "3rem" }}>
            หลักสูตรอบรม
          </h1>
          <p className="fs-4 text-center" style={{ fontSize: "1.5rem" }}>
            สำหรับผู้ที่สนใจเรียนรู้เกี่ยวกับข้อมูลผลิตภัณฑ์ Gi
          </p>
        </div>
      </div>

      {/* Courses Card Section */}
      <div className="container mt-5">
        <div className="row">
          {courses.map((course) => (
            <div className="col-md-4 mb-4" key={course.id}>
              <div className="card" style={{ width: "25rem" }}>
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <p className="card-text"><strong>วันที่:</strong> {course.date}</p>
                  <p className="card-text"><strong>เวลา:</strong> {course.time}</p>
                  <Link to={`/coures/${course.id}`} className="btn btn-primary">
                    ดูรายละเอียด
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;