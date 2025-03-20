import { useState } from "react";

const Product = [
    {
        url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        name: "สินค้า1"
    },
    {
        url: "https://cdn.pixabay.com/photo/2014/06/20/19/36/wheat-crops-373360_960_720.jpg",
        name: "สินค้า2"
    },
    {
        url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        name: "สินค้า3"
    },
    {
        url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        name: "สินค้า4"
    },
    {
        url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        name: "สินค้า5"
    }
];

const ProductList = () => {
    const [products, setProducts] = useState(Product);
    const [form, setForm] = useState({
        productName: "",
        requestNumber: "",
        registrationNumber: "",
        requestDate: "",
        registrationDate: "",
        productList: "",
        address: "",
        description: "",
        image: null
    });
    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleEdit = (index) => {
        setEditIndex(index);
        const product = products[index];
        setForm({
            ...form,
            productName: product.name
        });
        setShowModal(true);
    };

    const handleDelete = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
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
                {products.map((item, index) => (
                    <div
                        className="card col-3 me-3 mb-2 p-0"
                        key={index}
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
                                {item.name} {index + 1}
                            </h5>   
                            <div className="row">
                                <button
                                    className="col btn btn-warning m-1 text-white"
                                    onClick={() => handleEdit(index)}
                                >
                                    แก้ไข
                                </button>
                                <button
                                    className="col btn btn-danger m-1 text-white"
                                    onClick={() => handleDelete(index)}
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
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductList;
