import PresentTeachers from "components/Welcome/PresentTeachers";
import React from "react";
import ContactUsForm from "components/Form/ContactUsForm";
import ImageDescriptionBanner from "./ImageDescriptionBanner";
import InfoCard from "components/Cards/InfoCard";


export default function Aboutus() {
  return (
    <>
      <div className="justify-between pt-16 pb-16">
        <div className="bg-blue-500  px-8">
          <div className="flex justify-between text-white container mx-auto py-20">
            <div className="lg:w-12/12">
              <p style={{ fontSize: '3em' }} className="mb-6 bold ">ADS Public School</p>
              <p style={{ fontSize: '1em' }}>2 days ago · Tailwind is one of the frameworks that take the approach of reusable, content-agnostic CSS, like other frameworks of the same type (Bootstrap, Foundation). This is obviously and as usual in the programming world a tradeoff. It does not care too much about separation of concerns, it aims to provide reusable CSS. In contrast to its competition, it tackles the subject differently. 2 days ago · Tailwind is one of the frameworks that take the approach of reusable, content-agnostic CSS, like other frameworks of the same type (Bootstrap, Foundation). This is obviously and as usual in the programming world a tradeoff. It does not care too much about separation of concerns, it aims to provide reusable CSS. In contrast to its competition, it tackles the subject differently. 2 days ago · Tailwind is one of the frameworks that take the approach of reusable, content-agnostic CSS, like other frameworks of the same type (Bootstrap, Foundation). This is obviously and as usual in the programming world a tradeoff. It does not care too much about separation of concerns, it aims to provide reusable CSS. In contrast to its competition, it tackles the subject differently. 2 days ago · Tailwind is one of the frameworks that take the approach of reusable, content-agnostic CSS, like other frameworks of the same type (Bootstrap, Foundation). This is obviously and as usual in the programming world a tradeoff. It does not care too much about separation of concerns, it aims to provide reusable CSS. In contrast to its competition, it tackles the subject differently. 2 days ago · Tailwind is one of the frameworks that take the approach of reusable, content-agnostic CSS, like other frameworks of the same type (Bootstrap, Foundation). This is obviously and as usual in the programming world a tradeoff. It does not care too much about separation of concerns, it aims to provide reusable CSS. In contrast to its competition, it tackles the subject differently.</p>
            </div>
          </div>
        </div>
        <ImageDescriptionBanner />
        <ImageDescriptionBanner />
        <div className="lg:flex justify-center container py-3 py-3">
          <PresentTeachers />
        </div>
        <div className="flex justify-between container  mx-auto mt-32">
          <div className="lg:w-3/12 px-3">
            <InfoCard title='Motto' icon='fas fa-fingerprint' iconColor='bg-red-400'><p>df sdfh sdfh sh</p></InfoCard>
          </div>
          <div className="lg:w-3/12 px-3">
            <InfoCard title='Motto' icon='fas fa-fingerprint' iconColor='bg-black'><p>df sdfh sdfh sh</p></InfoCard>
          </div>
          <div className="lg:w-3/12 px-3">
            <InfoCard title='Motto' icon='fas fa-fingerprint' iconColor='bg-green-400'><p>df sdfh sdfh sh</p></InfoCard>
          </div>
          <div className="lg:w-3/12 px-3">
            <InfoCard title='Motto' icon='fas fa-fingerprint' iconColor='bg-blue-400'><p>df sdfh sdfh sh</p></InfoCard>
          </div>
        </div>
      </div>
      <section className="pb-20 relative block bg-gray-900">
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

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Build something
                </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Put the potentially record low maximum sea ice extent tihs
                year down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
                </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-6/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Excelent Services
                </h6>
              <p className="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
            </div>
            <div className="w-full lg:w-6/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow your market
                </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </p>
            </div>
          </div>
        </div>
      </section>
      <ContactUsForm />
    </>
  )
}