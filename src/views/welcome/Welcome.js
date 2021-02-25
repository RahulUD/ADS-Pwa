import React from "react";
import { Link } from "react-router-dom";
import PresentTeachers from "components/Welcome/PresentTeachers.js";
import Birthday from 'components/Welcome/Birthday'
import InfoCard from "components/Cards/InfoCard";
import WelcomeBanner from "components/Welcome/WelcomeBanner";
import ExpolreBanner from "./ExpolreBanner";
import ImageDescriptionBanner from "./ImageDescriptionBanner";
import ImageOverlay from "components/Overlay/ImageOverlay";

export default function Welcome() {
  return (
    <>
      <WelcomeBanner/>
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <InfoCard title='Awards' icon='fas fa-award' iconColor='bg-red-400'>
                <p className="mt-2 mb-4 text-gray-600">
                  Divide details about your product or agency work into
                  parts. A paragraph describing a feature will be enough.
                    </p>
              </InfoCard>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <InfoCard title='100% Result' icon='fas fa-user-graduate'>
                <p className="mt-2 mb-4 text-gray-600">
                  Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious.
                    </p>
              </InfoCard>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <InfoCard title='Digitally Transformed' icon='fas fa-laptop' iconColor='bg-green-400'>
                <p className="mt-2 mb-4 text-gray-600">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                    </p>
              </InfoCard>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-school text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Beyond the Classroom
                </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Personal Development Programme /Life Orientation : School Trips, Circle Time, Discovery Hour, Reading Writing Club, Writers’ Workshop, Research & Referral, Reading Programme, Mindspark,
                </p>
              <Link to="/" className="font-bold text-gray-800 mt-8">
                Check more ...
                </Link>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blue-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Alumni
                    </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                    </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageDescriptionBanner/>

      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-12 px-4">
              <h2 className="text-4xl font-semibold">Here are our heroes</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                ‘Our Team’ consists of the key personnel of the school that works relentlessly to materialise innovative ideas related to the school’s curriculum and other activities. Being profoundly creative and intellectual, the team members and the school’s faculty endeavour to cater to the futuristic educational needs of Generation Z with utmost rigour and exactness. The school consciously understands the imperativeness of quality education and thus, has instituted a highly professional and collaborative teaching culture that enhances the student’s performance. Besides being tech-savvy and well-trained, each team member possesses a deep understanding of children’s behaviour, for above academic qualifications; a tender heart remains indispensable for righteous action.
                </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <PresentTeachers />
          </div>
        </div>
      </section>

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

        <ExpolreBanner/>
      </section>
      <Birthday />
      <ImageOverlay />
    </>
  )
}