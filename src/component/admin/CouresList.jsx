import { useState } from "react";

const Product = [
  {
    url: "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
    name: "สินค้า1",
    id: 1,
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/06/20/19/36/wheat-crops-373360_960_720.jpg",
    name: "สินค้า2",
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

const CouresList = () => {
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
    image: null,
    selectedProducts: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    const product = products[index];
    setForm({
      ...form,
      productName: product.name,
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

  const handleCheckboxChange = (productId) => {
    setForm((prevForm) => {
      const selected = prevForm.selectedProducts.includes(productId)
        ? prevForm.selectedProducts.filter((id) => id !== productId)
        : [...prevForm.selectedProducts, productId];
      return { ...prevForm, selectedProducts: selected };
    });
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
        name: form.productName,
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
                objectFit: "cover",
              }}
              className="card-img-top"
              alt={item.name}
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
                  <div className="mb-3">
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
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      คำอธิบาย
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      required
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
                  <div className="mb-3">
                    <label className="form-label">เลือกสินค้า GI</label>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        เลือกสินค้า
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        {Product.map((item) => (
                          <li key={item.id}>
                            <div className="dropdown-item">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`product-${item.id}`}
                                  checked={form.selectedProducts.includes(
                                    item.id
                                  )}
                                  onChange={() =>
                                    handleCheckboxChange(item.id)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`product-${item.id}`}
                                >
                                  {item.name}
                                </label>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CouresList;
