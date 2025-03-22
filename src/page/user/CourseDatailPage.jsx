// import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../component/user/Navbar";
 
const CourseDetailPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const courseDetails = {
    1: {
      title: "หลักสูตร ข้าวเหนียวซิวเกลี้ยงเมืองเลย",
      description: "เรียนรู้ข้อมูลผลิตภัณฑ์สำหรับผู้ที่สนใจเรียนรู้เกี่ยวกับข้าวเหนียวซิวเกลี้ยงเมืองเลย",
      instructor: "ดร.สมชาย วิทยาการ",
      location: "มหาวิทยาลัยเกษตรศาสตร์",
      objective: "เรียนรู้กระบวนการผลิตและคุณค่าทางโภชนาการของข้าวเหนียวซิวเกลี้ยง",
      date: "1 เมษายน 2025",
      time: "10:00 AM - 12:00 PM",
      image: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    2: {
      title: "หลักสูตร 2",
      description: "การใช้งานข้อมูลผลิตภัณฑ์ Gi อย่างมีประสิทธิภาพ",
      instructor: "อาจารย์กาญจนา พิพัฒน์",
      location: "ศูนย์วิจัยข้อมูลอุตสาหกรรม",
      objective: "เสริมสร้างความเข้าใจการใช้ข้อมูลผลิตภัณฑ์ Gi เพื่อพัฒนาธุรกิจ",
      date: "5 เมษายน 2025",
      time: "02:00 PM - 04:00 PM",
      image: "https://via.placeholder.com/800x500"
    },
    3: {
      title: "หลักสูตร 3",
      description: "การวิเคราะห์ข้อมูลผลิตภัณฑ์ Gi",
      instructor: "ดร.อนันต์ ศรีวัฒนชัย",
      location: "สถาบันเทคโนโลยีพระจอมเกล้า",
      objective: "เรียนรู้เทคนิคการวิเคราะห์ข้อมูลผลิตภัณฑ์เพื่อการวิจัย",
      date: "10 เมษายน 2025",
      time: "09:00 AM - 11:00 AM",
      image: "https://via.placeholder.com/800x500"
    }
  };

  const course = courseDetails[id];

  if (!course) {
    return <div className="container mt-5 text-center">ไม่พบข้อมูลหลักสูตร</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-4">
        <div 
          className="card shadow-lg border-0 rounded overflow-hidden"
          style={{ background: "linear-gradient(to right, #f8f9fa, #e9ecef)" }}
        >
          <div className="row g-0">
            {/* รูปภาพด้านซ้าย */}
            <div className="col-lg-6">
              <img
                src={course.image}
                className="img-fluid rounded-start w-100"
                alt={course.title}
                style={{ objectFit: "cover", maxHeight: "500px", borderRadius: "10px 0 0 10px" }}
              />
            </div>

            {/* ข้อมูลด้านขวา */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="card-body p-5">
                <h3 className="card-title fw-bold text-primary">{course.title}</h3>
                <p className="card-text text-muted">{course.description}</p>
                <hr />
                <p className="card-text"><strong> ผู้จัดทำหลักสูตร:</strong> {course.instructor}</p>
                <p className="card-text"><strong> สถานที่:</strong> {course.location}</p>
                <p className="card-text"><strong> วัตถุประสงค์:</strong> {course.objective}</p>
                <p className="card-text"><strong> วันที่:</strong> {course.date}</p>
                <p className="card-text"><strong> เวลา:</strong> {course.time}</p>

                {/* ปุ่มกลับไปหน้าเดิม */}
                <button 
                  className="btn btn-outline-primary mt-4 px-4 py-2"
                  onClick={() => navigate(-1)}
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    transition: "0.3s",
                  }}
                >
                   กลับไปหน้าเดิม
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
