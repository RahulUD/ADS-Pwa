import React from 'react'
import sports from "assets/img/sports.jpg"
const ImageDescriptionBanner = () => {
    return (
        <section className="relative py-20">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: "translateZ(0)" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src={sports}
                        />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                                <i className="fas fa-rocket text-xl"></i>
                            </div>
                            <h3 className="text-3xl font-semibold">Culture & Sport</h3>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                The culture & sport curriculum forms an essential part of our school programme. We have allocated
                                cultural periods each week that will form part of our Personal Development Programme. We want to
                                create a platform for all our students to enable them to express themselves in a creative way using
                                different genres. The sporting mission of ADS is to provide coaching and sporting/practice facilities for
                                the learners to enable them to play as true sportspersons in “the spirit of the game”.
                  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ImageDescriptionBanner