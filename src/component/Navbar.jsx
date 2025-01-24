const Navbar = () => {
    return (
        <nav className="bg-gray-100 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="text-lg font-semibold text-gray-800">
                        Navbar scroll
                    </a>
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <div className="hidden lg:flex lg:items-center lg:space-x-4" id="navbarScroll">
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-800 hover:text-gray-900 font-medium"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-800 hover:text-gray-900 font-medium"
                                >
                                    Link
                                </a>
                            </li>
                            <li className="relative group">
                                <a
                                    href="#"
                                    className="text-gray-800 hover:text-gray-900 font-medium"
                                >
                                    Dropdown
                                </a>
                                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="border-gray-200" />
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 font-medium cursor-not-allowed"
                                    aria-disabled="true"
                                >
                                    Disabled
                                </a>
                            </li>
                        </ul>
                        <form className="flex items-center space-x-2">
                            <input
                                type="search"
                                placeholder="Search"
                                className="form-input px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;