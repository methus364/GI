
const heroImage = "https://cdn.pixabay.com/photo/2024/06/21/12/45/lake-8844310_960_720.jpg"

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
        }}>
        <div>
          <div className="bg-white d-flex flex-column  align-items-center justify-content-center " style={{ height: "65vh", width: "55vh" }}>
            <div>
              <h1>LOGIN</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
