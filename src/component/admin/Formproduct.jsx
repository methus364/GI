
const Formproduct = () => {
    return (
        <>
            <form>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                ชื่อสินค้า
                            </label>
                            <input
                                type=""
                                className="form-control"
                                id=""
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                เลขที่คำขอ
                            </label>
                            <input
                                type=""
                                className="form-control"
                                id=""
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                เลขทะเบียน
                            </label>
                            <input
                                type=""
                                className="form-control"
                                id=""
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                วันที่ยื่นคำขอ
                            </label>
                            <input
                                type=""
                                className="form-control"
                                id=""
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                วันที่ขึ้นทะเบียน
                            </label>
                            <input
                                type=""
                                className="form-control"
                                id=""
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                รายการสินค้า
                            </label>
                            <input
                                type=""
                                className="form-control"
                                id=""
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            ที่อยู่
                        </label>
                        <textarea
                            type=""
                            className="form-control"
                            id=""
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            รายละเอียด
                        </label>
                        <textarea
                            type=""
                            className="form-control"
                            id=""
                        />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            เพิ่มรูปภาพ
                        </label>
                        <input type="file" className="form-control" id="inputGroupFile02" />
                    </div>
                    {/* ปุ่มยืนยันส่งฟรอม */}
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </div>


            </form>
        </>
    )
}

export default Formproduct
