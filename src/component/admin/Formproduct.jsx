import { useState } from "react";

const Formproduct = () => {
    // สร้าง state สำหรับเก็บข้อมูลฟอร์ม
    const [form, setForm] = useState({
        productName: "",
        requestNumber: "",
        registrationNumber: "",
        requestDate: "",
        registrationDate: "",
        productList: "",
        address: "",
        description: "",
        image: null,
    });

    // ฟังก์ชัน handleChange สำหรับอัปเดต state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    // ฟังก์ชัน handleFileChange สำหรับจัดการการอัปโหลดไฟล์
    const handleFileChange = (e) => {
        setForm((prevForm) => ({
            ...prevForm,
            image: e.target.files[0], // เก็บไฟล์รูปภาพใน state
        }));
    };

    // ฟังก์ชัน handleSubmit สำหรับส่งฟอร์ม
    const handleSubmit = (e) => {
        e.preventDefault(); // ป้องกันหน้ารีเฟรช
        console.log("Form Data Submitted:", form);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="productName" className="form-label">
                                ชื่อสินค้า
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="productName"
                                name="productName"
                                value={form.productName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="requestNumber" className="form-label">
                                เลขที่คำขอ
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="requestNumber"
                                name="requestNumber"
                                value={form.requestNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="registrationNumber" className="form-label">
                                เลขทะเบียน
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="registrationNumber"
                                name="registrationNumber"
                                value={form.registrationNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="requestDate" className="form-label">
                                วันที่ยื่นคำขอ
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="requestDate"
                                name="requestDate"
                                value={form.requestDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="registrationDate" className="form-label">
                                วันที่ขึ้นทะเบียน
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="registrationDate"
                                name="registrationDate"
                                value={form.registrationDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="productList" className="form-label">
                                รายการสินค้า
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="productList"
                                name="productList"
                                value={form.productList}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            ที่อยู่
                        </label>
                        <textarea
                            className="form-control"
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            รายละเอียด
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                            เพิ่มรูปภาพ
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Formproduct;
