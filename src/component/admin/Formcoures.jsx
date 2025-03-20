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

const Formcoures = () => {
  const [form, setForm] = useState({
    couresName: "",
    title: "",
    lecturer: "",
    startDate: "",
    location: "",
    time: "",
    endDate: "",
    description: "",
    image: null,
    selectedProducts: [], // Array to hold selected product IDs
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      image: e.target.files[0],
    }));
  };

  const handleCheckboxChange = (productId) => {
    setForm((prevForm) => {
      const selectedProducts = [...prevForm.selectedProducts];
      if (selectedProducts.includes(productId)) {
        // Remove product if already selected
        return {
          ...prevForm,
          selectedProducts: selectedProducts.filter((id) => id !== productId),
        };
      } else {
        // Add product to the selection
        return {
          ...prevForm,
          selectedProducts: [...selectedProducts, productId]
        };
      }
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="couresName" className="form-label">
              ชื่อหลักสูตร
            </label>
            <input
              type="text"
              className="form-control"
              id="couresName"
              name="couresName"
              value={form.couresName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="title" className="form-label">
              หัวข้อ
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="startDate" className="form-label">
              วันที่เริ่มหลักสูตร
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="endDate" className="form-label">
              วันที่สิ้นสุดอบรม
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="time" className="form-label">
              เวลาในการอบรม
            </label>
            <input
              type="text"
              className="form-control"
              id="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="lecturer" className="form-label">
              วิทยากร
            </label>
            <input
              type="text"
              className="form-control"
              id="lecturer"
              name="lecturer"
              value={form.lecturer}
              onChange={handleChange}
              required
            />
          </div>
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
          <label htmlFor="products" className="form-label">
            เกี่ยวข้องกับสินค้า
          </label>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              เลือกสินค้า GI
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {Product.map((item) => (
                <li key={item.id}>
                  <div className="dropdown-item">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`product-${item.id}`}
                        checked={form.selectedProducts.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
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
      {/* Display Selected Products */}
      {form.selectedProducts.map((productId, index) => {
        const product = Product.find((item) => item.id === productId);
        return (
          <p key={index}>
            {product ? product.name : "Unknown Product"}
          </p>
        );
      })}
    </form>
  );
};

export default Formcoures;
