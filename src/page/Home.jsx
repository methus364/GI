import Coureshome from "../component/Coureshome"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Navbar from "../component/Navbar"
import Producthome from "../component/Producthome"
import Teamhome from "../component/Teamhome"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Producthome/>
        <Coureshome/>
        <Teamhome/>
        <Footer/>
    </div>
  )
}

export default Home
