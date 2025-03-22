import { useState } from "react";

const Product = [
    {
      url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
      name: "สินค้า1",
      id: 1,
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
            image: null,
        });
    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleEdit = (id) => {
        setEditIndex(id);
        const product = products[id];
        setForm({
            ...form,
            productName: product.name
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
        setForm({ ...form, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedProducts = [...products];
            updatedProducts[editIndex] = {
                ...updatedProducts[editIndex],
                name: form.productName
            };
            setProducts(updatedProducts);
        }
        setShowModal(false);
    };

    return (
        <>
            <div className="row">
                {products.map((item, id) => (
                    <div
                        className="card col-3 me-3 mb-2 p-0"
                        key={id}
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
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {item.name} {id}
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
                    <div className="modal-dialog">
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


                                        <div className="row mb-3">
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
                                                    required
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
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-2">
                                            Submit
                                        </button>
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
