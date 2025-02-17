const Product = [
    {
        "url": "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        "name": "สินค้า"
    },
    {
        "url": "https://cdn.pixabay.com/photo/2014/06/20/19/36/wheat-crops-373360_960_720.jpg",
        "name": "สินค้า"
    },
    {
        "url": "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        "name": "สินค้า"
    },
    {
        "url": "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        "name": "สินค้า"
    },
    {
        "url": "https://cdn.pixabay.com/photo/2018/07/08/21/35/wheat-3524861_1280.jpg",
        "name": "สินค้า"
    }
]
const ProductList = () => {
    return (
        <>
            <div className="row " >
            {Product.map((item, index) => (
                <div className="card col-3 me-3 mb-2 p-0" key={index} style={{ width: "18rem" }}>
                    <img src={item.url} style={{  width: "100%",height: "16rem", objectFit: "cover" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name} {index+1}</h5>
                        <div className="row">
                            <div className="col btn btn-warning m-1">   
                                <a href="#" className="text-decoration-none text-white">แก้ไข</a>
                            </div>
                            <div className="col btn btn-danger m-1">
                                <a href="#" className="text-decoration-none text-white">ลบ</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default ProductList  
