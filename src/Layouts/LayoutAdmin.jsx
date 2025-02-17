import { Outlet } from "react-router-dom"
import Menubar from "../component/admin/Menubar"
import HearderAdmin from "../component/admin/HearderAdmin"
//โครงสร้าง Layout หน้า admin
const LayoutAdmin = () => {
    return (
        <div className="d-flex vh-100">
            {/*Sidebar */}
            <Menubar />
            <div className="d-flex flex-column flex-grow-1">
                {/* Hearder หน้าแอดมิน */}
                <HearderAdmin />
                <main className="flex-grow-1 p-3 bg-light overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>  

    )
}

export default LayoutAdmin
