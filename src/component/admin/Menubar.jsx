import { NavLink } from "react-router-dom"

const Menubar = () => {
    return (
        <div>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
                style={{ width: "280px", height: "100vh" }}
            >
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                    <svg className="bi me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">Admin Palnal</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink
                            to={'/admin'}
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-decoration-none bg-dark text-white px-3 py-2 d-flex align-items-center rounded'
                                    : 'text-decoration-none text-secondary px-3 py-2 d-flex align-items-center rounded hover-bg-dark hover-text-white'
                            }>
                            Product
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to={'addproduct'}
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-decoration-none bg-dark text-white px-3 py-2 d-flex align-items-center rounded'
                                    : 'text-decoration-none text-secondary px-3 py-2 d-flex align-items-center rounded hover-bg-dark hover-text-white'
                            }>
                            Add New Product
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to={'addcategory'}
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-decoration-none bg-dark text-white px-3 py-2 d-flex align-items-center rounded'
                                    : 'text-decoration-none text-secondary px-3 py-2 d-flex align-items-center rounded hover-bg-dark hover-text-white'
                            }>
                            Add New Category
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to={'coures'}
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-decoration-none bg-dark text-white px-3 py-2 d-flex align-items-center rounded'
                                    : 'text-decoration-none text-secondary px-3 py-2 d-flex align-items-center rounded hover-bg-dark hover-text-white'
                            }>
                            Coures
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to={'Addcoures'}
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-decoration-none bg-dark text-white px-3 py-2 d-flex align-items-center rounded'
                                    : 'text-decoration-none text-secondary px-3 py-2 d-flex align-items-center rounded hover-bg-dark hover-text-white'
                            }>
                            Add New Coures
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a
                        href="#"
                        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                        id="dropdownUser1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://github.com/mdo.png"
                            alt=""
                            width="32"
                            height="32"
                            className="rounded-circle me-2"
                        />
                        <strong>mdo</strong>
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-dark text-small shadow"
                        aria-labelledby="dropdownUser1"
                    >
                        <li>
                            <a className="dropdown-item" href="#">
                                New project...
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Profile
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menubar;
