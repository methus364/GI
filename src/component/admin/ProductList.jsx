import { useState } from "react";

const Product = [
    {
        id: "1",
        name: "ข้าวเหนียวซิวเกลี้ยงเมืองเลย",
        commonName: "Siwgleang Mueang Loei Sticky Rice หรือ Khao NeawSiwgleang Mueang Loei",
        scientificName: "Oryza sativa L",
        family: "Poaceae",
        order: "Poales",
        class: " Liliopsida",
        phylum: "Magnoliophyta",
        history: " ที่มาและชื่อพันธุ์ข้าวเหนียวซิวเกลี้ยง มีถิ่นกำเนิดอยู่จังหวัดเลยเป็นสายพันธุ์ข้าวไร่พื้นเมืองของจังหวัดเลยที่ปลูกสืบทอดมาจากบรรพบุรุษยายนานกว่า200 ปี ประกอบกับจังหวัดเลยมีสภาพภูมิประเทศเป็นพื้นที่ภูเขาและเนินเขา มีเทือกเขายาวโดยมีที่ราบลุ่มระหว่างหุบเขาสลับอยู่ระหว่างแนวเทือกเขาจึงนิยมปลูกข้าวไร่เป็นหลักซึ่งข้าวเหนียวพันธุ์ซิวเกลี้ยงเป็นสายพันธุ์ที่เกษตรกรนิยมปลูกกันมากกว่าพันธุ์อื่นๆ เพราะมีลักษณะเด่นคือมีอัตราการงอกสูงที่สุดเมื่อเทียบกับพันธุ์อื่นๆมีความทนทานต่อความแห้งแล้งโรคและแมลงศัตรูพืชให้ผลผลิตดีและมีปริมาณมากกว่าข้าวไร่พันธุ์พื้นเมืองอื่นๆจากคำบอกเล่าของคนท้องถิ่นในอำเภอด่านซ้ายให้ข้อมูลว่าข้าวเหนียวซิวเกลี้ยง มีชื่อเดิมเรียกว่า ซิวอ้าว (ซิวแปลว่า เล็ก)ต่อมามีการเรียกชื่อใหม่ว่า “ซิวเกลี้ยง”ตามลักษณะของเมล็ดข้าวที่ไม่มีขน โดยข้าวเหนียวซิวเกลี้ยงเมืองเลยมีลักษณะเด่นคือ ส่วนปลายเมล็ดข้าวเปลือกมีจุดสีน้ำตาลและเมื่อหุงสุกเมล็ดข้าวจะสวย มีกลิ่นหอมเล็กน้อย เหนียว นุ่ม อร่อย ซึ่งแตกต่างจากการปลูกในบริเวณพื้นที่ราบที่ปลายเมล็ดข้าวเปลือกไม่มีสีน้ำตาล              ต่อมาเมื่อปี พ.ศ. 2543 ได้มีการรวมกลุ่มเกษตรกรในพื้นที่บ้านน้ำเย็นจัดตั้งวิสาหกิจชุมชนกลุ่มผลิตเมล็ดพันธุ์ข้าวไร่บ้านน้ำเย็นเพื่ออนุรักษ์พันธุ์ข้าวไร่พื้นเมืองหลายสายพันธุ์รวมถึงข้าวเหนียวซิวเกลี้ยงด้วยโดยในภายหลังได้มีการนำกลับมาปลูกอย่างแพร่หลาย ตั้งแต่ปี พ.ศ. 2543 และได้มีกิจกรรมส่งเสริมการปลูกข้าวไร่เพื่อการท่องเที่ยว เช่น การจัดกิจกรรมวันข้าวไร่การจัดงานวันถ่ายทอดเทคโนโลยีเพื่อเริ่มต้นฤดูกาลผลิตใหม่ เป็นต้นซึ่งจัดโดยสำนักงานเกษตรจังหวัดเลย สำนักงานเกษตรอำเภอด่านซ้ายและองค์การบริหารส่วนตำบลกกสะทอน อำเภอด่านซ้าย จังหวัดเลย",
        general: "ข้าวเหนียวซิวเกลี้ยงเมืองเลยเป็นข้าวไร่พันธุ์พื้นเมืองที่ไวต่อช่วงแสง ปลูกในช่วงฤดูฝนในพื้นที่ดอน เนินเขา ที่ราบลอนคลื่น และพื้นที่ราบระหว่างภูเขาที่ระดับความสูง 500 – 1,000 เมตร จากระดับน้ำทะเลเมล็ดรูปร่างเรียวยาว ข้าวเปลือกมีสีฟาง ไม่มีขนส่วนปลายเมล็ดมีจุดสีน้ำตาล เมื่อหุงสุกเมล็ดสวย เหนียวนุ่มและมีกลิ่นหอมเล็กน้อย หลังจากหุงเป็นเวลานานยังคงความนุ่มไว้ได้ปลูกมากในพื้นที่อำเภอด่านซ้าย อำเภอภูเรือ และอำเภอนาแห้ว",
        agricultural: "ความสูงของต้นกล้าเฉลี่ย 49.90 เซนติเมตร, ลำต้นยาวเฉลี่ย 61.21 เซนติเมตร, ความยาวของรวงเฉลี่ย 17.65 เซนติเมตร, จำนวน 1 หน่อต่อกอ,การชูรวงเหนือใบธงชูรวงดีมาก, อายุวันออกดอก 75-78 วัน,ลำต้นแข็งแรงปานกลาง, มีการติดเมล็ด 90%, การร่วงของเมล็ดน้อยและน้ำหนัก 100 เมล็ด 3.15 กรัม",
        botanical: " แผ่นใบสีเขียวมีขนบ้างเล็กน้อย, กาบใบมีสีเขียว,มุมของยอดแผ่นใบตั้งตรง, สีของลิ้นใบ (เยื่อกั้นน้ำฝน),มีสีขาวรูปร่างแหลม, มีความยาวยาวเฉลี่ย 13.80 มิลลิเมตร,หูใบมีสีขาว, สีของข้อต่อใบกับกาบใบเขียว, สีของปล้องสีเขียว,กอตั้ง, มุมของใบธงหักลง, มุมหรือลักษณะกอตั้งตรงสีของปล้องด้านนอกมีสีเขียว, ไม่มีการแตกระแง้, ลักษณะรวงกระจายปานกลาง, ก้านรวงตั้งตรง, การแก่ของใบปานกลางและการแห้งของใบใต้ใบธงแห้งช้า",
        Seeds: "เปลือกของเมล็ดสีฟางไม่มีขน, ไม่มีหางข้าว, ยอดเมล็ดมีสีฟาง,ข้าวกล้องสีขาว,รูปร่างเรียว, ความยาวของเมล็ดข้าวเปลือกเฉลี่ย 10.33 มิลลิเมตร และความกว้างของเมล็ดข้าวเปลือกเฉลี่ย 3.47 มิลลิเมตร",
        requestNumber: "1101",
        registrationNumber: "123",
        requestDate: "2025-03-21",
        registrationDate: "2025-03-21",
        category: "Fruits",
        latitude: "",
        longitude: "",
        imge: [],
        url: ""
    },
    {
        url: "https://cdn.pixabay.com/photo/2014/06/20/19/36/wheat-crops-373360_960_720.jpg",
        name: "สินค้า20",
        id: 2,
    },
    {
        url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        name: "สินค้า3",
        id: 3,
    },
    {
        url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        name: "สินค้า4",
        id: 4,
    },
    {
        url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        name: "สินค้า5",
        id: 5,
    },
];

const categories = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Dairy Products" },
    { id: 4, name: "Snacks" },
    { id: 5, name: "Beverages" },
];

const ProductList = () => {
    const [products, setProducts] = useState(Product);
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
        image: [],
        url: ""
    });
    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleEdit = (id) => {
        setEditIndex(id);
        const product = products[id];
        setForm({
            ...form,
            name: product.name,
            commonName: product.commonName,
            scientificName: product.scientificName,
            family: product.family,
            order: product.order,
            class: product.class,
            phylum: product.phylum,
            history: product.history,
            general: product.general,
            agricultural: product.agricultural,
            botanical: product.botanical,
            seeds: product.seeds,
            requestNumber: product.requestNumber,
            registrationNumber: product.registrationNumber,
            requestDate: product.requestDate,
            registrationDate: product.registrationDate,
            latitude: product.latitude,
            longitude: product.longitude,
            category: product.category,
            image: [],
            url: product.url,
        });
        setShowModal(true);
    };

    const handleDelete = (id) => {
        const updatedProducts = products.filter((_, i) => i !== id);
        setProducts(updatedProducts);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        try {
            const file = e.target.files[0];
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert('กรุณาอัปโหลดไฟล์รูปภาพเท่านั้น');
                    return;
                }
                const imageUrl = URL.createObjectURL(file);
                setForm({ ...form, image: file, url: imageUrl });
            }
        } catch (error) {
            console.error('Error handling file:', error);
            alert('เกิดข้อผิดพลาดในการอัปโหลดไฟล์');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim()) {
            alert('กรุณากรอกชื่อสินค้า');
            return;
        }

        if (editIndex !== null) {
            const updatedProducts = [...products];
            updatedProducts[editIndex] = {
                ...updatedProducts[editIndex],
                name: form.name,
                url: form.url || updatedProducts[editIndex].url,
                id: products[editIndex].id
            };
            setProducts(updatedProducts);
            setEditIndex(null);
        }

        setForm({
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
            image: null,
            url: ""
        });
        setShowModal(false);
    };

    return (
        <>
            <div className="row">
                {products.map((item, id) => (
                    <div
                        className="card col-3 me-3 mb-2 p-0"
                        key={item.id}
                        style={{ width: "18rem" }}
                    >
                        <img
                            src={item.url}
                            style={{
                                width: "100%",
                                height: "16rem",
                                objectFit: "cover"
                            }}
                            className="card-img-top"
                            alt={item.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {item.name}
                            </h5>
                            <div className="row">
                                <button
                                    className="col btn btn-warning m-1 text-white"
                                    onClick={() => handleEdit(id)}
                                >
                                    แก้ไข
                                </button>
                                <button
                                    className="col btn btn-danger m-1 text-white"
                                    onClick={() => handleDelete(id)}
                                >
                                    ลบ
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">แก้ไขสินค้า</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
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
                                                    type="text"
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
                                                    type="text"
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
                                                <label htmlFor="category" className="form-label">
                                                    หมวดหมู่
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="category"
                                                    name="category"
                                                    value={form.category}
                                                    onChange={handleChange}
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
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="latitude" className="form-label">
                                                    ละติจูด
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="latitude"
                                                    name="latitude"
                                                    value={form.latitude}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="longitude" className="form-label">
                                                    ลองจิจูด
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="longitude"
                                                    name="longitude"
                                                    value={form.longitude}
                                                    onChange={handleChange}
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
                                                <label htmlFor="general" className="form-label">
                                                    ลักษณะทั่วไป
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="general"
                                                    name="general"
                                                    value={form.general}
                                                    onChange={handleChange}
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
                                                id="image"
                                                name="image"
                                                onChange={handleFileChange}
                                                accept="image/*"
                                            />
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 mt-2">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => setShowModal(false)}
                                            >
                                                ยกเลิก
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                บันทึก
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductList;