import { useState } from "react";

const Addcategory = () => {
    const [form, setForm] = useState({
        category: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // ป้องกันหน้ารีเฟรช
        console.log("Form Data Submitted:", form);
    };


    return (
        <div>
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
                                id="category"
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Addcategory
