import { useState } from "react";


const categories = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Dairy Products" },
    { id: 4, name: "Snacks" },
    { id: 5, name: "Beverages" },
];

const Formproduct = () => {
    // สร้าง state สำหรับเก็บข้อมูลฟอร์ม
    const [form, setForm] = useState({
        name: "",
        commonName: "",
        scientificName: "",
        family: "",
        order: "",
        class: "",
        phylum: "",
        history: "",
        general: "",
        agricultural: "",
        botanical: "",
        seeds: "",
        requestNumber: "",
        registrationNumber: "",
        requestDate: "",
        registrationDate: "",
        latitude: "",
        longitude: "",
        category: "",
        url:"",
        image: [],
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
    // const handleFileChange = (e) => {
    //     setForm((prevForm) => ({
    //         ...prevForm,
    //         image: e.target.files[0], // เก็บไฟล์รูปภาพใน state
    //     }));
    // };
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setForm((prevForm) => ({
            ...prevForm,
            image: files
        }));
    };
    // ฟังก์ชัน handleSubmit สำหรับส่งฟอร์ม
    const handleSubmit = (e) => {
        e.preventDefault(); // ป้องกันหน้ารีเฟรช
        // ตรวจสอบว่าทุกฟิลด์ถูกกรอก
        for (let key in form) {
            if (!form[key] && key !== "image") {
                alert(`กรุณากรอก ${key} ให้ครบ`);
                return;
            }
        }

        console.log("Form Data Submitted:", form);
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="name" className="form-label">
                                ชื่อสินค้า
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
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
                                required
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
                                required
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
                                required
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
                                required
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="category" className="form-label">
                                หมวดหมู่
                            </label>
                            <select
                                className="form-select"
                                id="category"
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">เลือกหมวดหมู่</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="commonName" className="form-label">
                                ชื่อสามัญ (Common Name)
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="commonName"
                                name="commonName"
                                value={form.commonName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="scientificName" className="form-label">
                                ชื่อวิทยาศาสตร์ (Scientific Name)
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="scientificName"
                                name="scientificName"
                                value={form.scientificName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="phylum" className="form-label">
                                ไฟลัม (Phylum)
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="phylum"
                                name="phylum"
                                value={form.phylum}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="family" className="form-label">
                                วงศ์ (Family)
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="family"
                                name="family"
                                value={form.family}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb3">
                        <div className="col">
                            <label htmlFor=" latitude" className="form-label">
                                ละติจูด
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="latitude"
                                name="latitude"
                                value={form.latitude}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor=" longitude" className="form-label">
                                ลองจิจูด
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id=" longitude"
                                name=" longitude"
                                value={form.longitude}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="order" className="form-label">
                                อันดับ (Order)
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="order"
                                name="order"
                                value={form.order}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="class" className="form-label">
                                ชั้น (Class)
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="class"
                                name="class"
                                value={form.class}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="requestNumber" className="form-label">
                                หมายเลขคำขอ
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="requestNumber"
                                name="requestNumber"
                                value={form.requestNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="registrationNumber" className="form-label">
                                หมายเลขทะเบียน
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="registrationNumber"
                                name="registrationNumber"
                                value={form.registrationNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="requestNumber" className="form-label">
                                ลิ้งคลิปวิดิโอ
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="url"
                                name="url"
                                value={form.url}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="history" className="form-label">
                                ประวัติ
                            </label>
                            <textarea
                                className="form-control"
                                id="history"
                                name="history"
                                value={form.history}
                                onChange={handleChange}
                                required
                                style={{
                                    resize: "none", // ป้องกันการปรับขนาด
                                    width: "100%",
                                    height: "15rem",
                                }}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="general" className="form-label">
                                ลักษณะทั่วไป
                            </label>
                            <textarea
                                className="form-control"
                                id="general"
                                name="general"
                                value={form.general}
                                onChange={handleChange}
                                required
                                style={{
                                    resize: "none", // ป้องกันการปรับขนาด
                                    width: "100%",
                                    height: "15rem",
                                }}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="agricultural" className="form-label">
                                ด้านการเกษตร
                            </label>
                            <textarea
                                className="form-control"
                                id="agricultural"
                                name="agricultural"
                                value={form.agricultural}
                                onChange={handleChange}
                                required
                                style={{
                                    resize: "none", // ป้องกันการปรับขนาด
                                    width: "100%",
                                    height: "15rem",
                                }}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="botanical" className="form-label">
                                พฤกษศาสตร์
                            </label>
                            <textarea
                                className="form-control"
                                id="botanical"
                                name="botanical"
                                value={form.botanical}
                                onChange={handleChange}
                                required
                                style={{
                                    resize: "none", // ป้องกันการปรับขนาด
                                    width: "100%",
                                    height: "15rem",
                                }}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="seeds" className="form-label">
                                เมล็ดพันธุ์
                            </label>
                            <textarea
                                className="form-control"
                                id="seeds"
                                name="seeds"
                                value={form.seeds}
                                onChange={handleChange}
                                required
                                style={{
                                    resize: "none", // ป้องกันการปรับขนาด
                                    width: "100%",
                                    height: "15rem",
                                }}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                            เพิ่มรูปภาพ
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            multiple
                            // accept="image/*"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            required
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
