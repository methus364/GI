import Navbar from "../../component/user/Navbar"
import Detail from "../../component/user/Detail"
import Map from "../../component/user/Map"
import Video from "../../component/user/Video"
import { useParams } from "react-router-dom"

const ProductDeatil = () => {
    const {id} = useParams()
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Detail id="1" />
                <div className="d-flex justify-content-center align-content-center">
                    <Map />
                    <Video videoUrl='https://www.youtube.com/watch?v=jD6813wGdBA' />
                </div>
            </div>
        </>
    )
}

export default ProductDeatil
