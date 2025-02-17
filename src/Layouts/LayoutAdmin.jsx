import { Outlet } from "react-router-dom"
import Menubar from "../component/admin/Menubar"
import HearderAdmin from "../component/admin/HearderAdmin"

const LayoutAdmin = () => {
    return (
        <div className="d-flex vh-100">
            <Menubar />
            <div className="d-flex flex-column flex-grow-1">
                <HearderAdmin />
                <main className="flex-grow-1 p-3 bg-light overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>  

    )
}

export default LayoutAdmin
