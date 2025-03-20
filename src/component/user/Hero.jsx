import Footer from "./Footer";

const heroImage =
  "https://cdn.pixabay.com/photo/2024/06/21/12/45/lake-8844310_960_720.jpg";

const productImage = [
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "rice",
  },
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "rice",
  },
  {
    url: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "rice",
  },
];

const couse = [
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww",
    bigtext: "Best deals ",
    hilight: "Crispy Sandwiches",
    text: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches",
    btnMassage: "Proceed to order",
    urlbtn: "/",
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww",
    bigtext: "Best deals ",
    hilight: "Crispy Sandwiches",
    text: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches",
    btnMassage: "Proceed to order",
    urlbtn: "/",
  },

  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww",
    bigtext: "Best deals ",
    hilight: "Crispy Sandwiches",
    text: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches",
    btnMassage: "Proceed to order",
    urlbtn: "/",
  },
];
const Hero = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark d-flex flex-column  align-items-center justify-content-center"
        style={{
          height: "100vh",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div
            className="text-light d-flex flex-column  align-items-center justify-content-center "
            style={{ height: "65vh", width: "80vh" }}
          >
            <div className="d-flex flex-column align-items-center text-center">
              <h1>วัตถุประสงค์ในการจัดทำเว็บไซต์</h1>
              <p className="fs-5 ">
                สำหรับรวบรวมข็อมูลผลิตภัณฑ์ Gi <br />
                ในจังหวัดสำการการศึกษาเเละค้นหาข้อมูลรวมถึงหลักสูตร <br />
                อบรมที่เกี่ยวข้องกับผลิตภัณฑ์
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div
          className=" "
          style={{
            marginTop: 60,
            width: 1300,
            height: 500,
            backgroundColor: "#F2F5FA",
          }}
        >
          <div className="  m-2 mt-3 py-2 d-flex justify-content-between ">
            <select
              name="cars"
              id="cars"
              style={{ backgroundColor: "#fff" }}
              className="p-2 rounded "
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <a
              href="/"
              style={{ backgroundColor: "#A35C00 ", borderRadius: "16px" }}
              className="rounded text-light  p-2 text-decoration-none"
            >
              ผลิตภัณฑ์ทั้งหมด
            </a>
          </div>

          <div className="row m-2 justify-content-evenly">
            {productImage.map((item, index) => (
              <div
                className="card col-3 mb-2 p-0"
                key={index}
                style={{ width: "25rem" }}
              >
                <img
                  src={item.url}
                  style={{ width: "100%", height: "20rem", objectFit: "cover" }}
                  className="card-img-top rounded"
                  alt="..."
                />
                <div className="card-body bg-transparent">
                  <h5 className="card-title text-center">{item.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center mt-5">
        <div
          className="d-flex flex-column "
          style={{ width: 1275, height: 1800 }}
        >
          <div className="d-flex justify-content-between align-content-center m-2">
            <h1>หลักสูตรอบรมล่าสุด</h1>
            <a
              href="/"
              className="p-2 rounded-3 text-decoration-none fs-4 text-light mx-2"
              style={{ backgroundColor: "#A35C00 " }}
            >
              หลักสูตรทั้งหมด
            </a>
          </div>
          {couse.map((item, index) => (
            <div className="container ">
              <div
                className="row w-100 g-0 p-2"
                style={{ height: 512, backgroundColor: "#F2F5FA" }}
              >
                {index == 1 ? (
                  <>
                    <div className="col  ">
                      <img
                        src={item.url}
                        alt={item.bigtext}
                        className="w-100  h-100 object-fit-cover "
                      />
                    </div>

                    <div className="col  p-2">
                      <h1 className="" style={{ marginTop: 70 }}>
                        Best deals
                        <span
                          className="text-warning"
                          style={{ fontWeight: 700 }}
                        >
                          Crispy <br /> Sandwiches
                        </span>
                      </h1>
                      <p className=" mt-5 fs-4">{item.text}</p>
                      <a
                        href="/"
                        className=" text-decoration-none fs-5 p-2 d-flex justify-content-center align-content-center text-white border"
                        style={{ backgroundColor: "#A35C00 ", marginTop: 100 }}
                      >
                        {item.btnMassage}
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col p-2">
                      <h1 className="" style={{ marginTop: 70 }}>
                        Best deals
                        <span
                          className="text-warning"
                          style={{ fontWeight: 700 }}
                        >
                          Crispy <br /> Sandwiches
                        </span>
                      </h1>
                      <p className=" mt-5 fs-4">{item.text}</p>
                      <a
                        href="/"
                        className=" text-decoration-none fs-5 p-2 d-flex justify-content-center align-content-center text-white border"
                        style={{ backgroundColor: "#A35C00 ", marginTop: 100 }}
                      >
                        {item.btnMassage}
                      </a>
                    </div>
                    <div className="col  ">
                      <img
                        src={item.url}
                        alt={item.bigtext}
                        className="w-100  h-100 object-fit-cover "
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Hero;
