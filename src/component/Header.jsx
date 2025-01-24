

const Header = () => {
    return (
        <div>
            <div className="relative">
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <button
                        className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 active:bg-gray-800"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* Carousel Inner */}
                <div className="relative w-full h-64 overflow-hidden">
                    {/* Slide 1 */}
                    <div className="absolute w-full h-full bg-gray-700 flex items-center justify-center">
                        <div className="container mx-auto text-left text-white">
                            <h1 className="text-3xl font-bold">Example headline.</h1>
                            <p className="mt-2">
                                Some representative placeholder content for the first slide of
                                the carousel.
                            </p>
                            <a
                                href="#"
                                className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded hover:bg-blue-600"
                            >
                                Sign up today
                            </a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="absolute w-full h-full bg-gray-800 flex items-center justify-center">
                        <div className="container mx-auto text-center text-white">
                            <h1 className="text-3xl font-bold">Another example headline.</h1>
                            <p className="mt-2">
                                Some representative placeholder content for the second slide of
                                the carousel.
                            </p>
                            <a
                                href="#"
                                className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded hover:bg-blue-600"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="absolute w-full h-full bg-gray-900 flex items-center justify-center">
                        <div className="container mx-auto text-right text-white">
                            <h1 className="text-3xl font-bold">One more for good measure.</h1>
                            <p className="mt-2">
                                Some representative placeholder content for the third slide of
                                this carousel.
                            </p>
                            <a
                                href="#"
                                className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded hover:bg-blue-600"
                            >
                                Browse gallery
                            </a>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                    aria-label="Previous"
                >
                    Prev
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                    aria-label="Next"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Header
