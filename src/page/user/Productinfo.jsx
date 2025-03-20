
import Footer from "../../component/user/Footer";
import Hero from "../../component/user/Hero";
import Navbar from "../../component/user/Navbar";

const products = [
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Daily Essentials",
    discount: "UP TO 50% OFF",
  },
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Vegetables",
    discount: "UP TO 50% OFF",
  },
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Fruits",
    discount: "UP TO 50% OFF",
  },
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Strawberry",
    discount: "UP TO 50% OFF",
  },
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Mango",
    discount: "UP TO 50% OFF",
  },
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Cherry",
    discount: "UP TO 50% OFF",
  },
];

const Productinfo = () => {
  return (
    <>
      <Navbar />
      <div className=" py-5">
        {/* Hero Section */}

        {/* Product Section */}
        <div className="container">
          <div className="my-5">
            <h2 className="text-dark">Product 1</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
              {products.map((product, index) => (
                <div className="col" key={index}>
                  <div className="card border-0 shadow-sm text-center">
                    <img
                      src={product.url}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.name}</h6>
                      <p className="text-muted small">{product.discount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Productinfo;
