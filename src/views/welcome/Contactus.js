import React from "react";

export default function Contactus() {
  return (
    <>
      <div className="relative pt-16 flex content-center items-center justify-center min-h-screen-75">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.9956434791457!2d86.45507531449067!3d25.505191825395844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1e48a50ba031f%3A0xfc8586059f737d18!2sA.D.S.%20Public%20School!5e0!3m2!1sen!2sin!4v1611900525437!5m2!1sen!2sin" width="100%" height="600" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <section className="pb-20 relative block bg-blue-900">
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
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-20">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-6/12 px-4 text-center">
              
              <h5 className="text-xl text-left font-semibold text-white">
                Address
                </h5>
              <p className="mt-2 mb-4 text-gray-500 text-left">
                ADS Public School
                </p>
                <p className="mt-2 mb-4 text-gray-500 text-left">
                Near West Railway Cabin, Khagaria Bihar
                </p>
                <p className="mt-2 mb-4 text-gray-500 text-left">
                Pin : 851204
                </p>
            </div>
            <div className="w-full lg:w-6/12 px-4 text-center">
             
              <h5 className="text-xl text-left font-semibold text-white">
                Contact
                </h5>
              <p className="mt-2 mb-4 text-left text-gray-500">
                Call : 9430851182
                </p>
                <p className="mt-2 mb-4 text-left text-gray-500">
                Email : rahulsinghkgg@gmail.com
                </p>
                <p className="mt-2 mb-4 text-left text-gray-500">
                Website : www.ads.com
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}