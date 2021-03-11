import React from "react";
import { Link } from "react-router-dom";
import PresentTeachers from "components/Welcome/PresentTeachers.js";
import Birthday from 'components/Welcome/Birthday'
import WelcomeBanner from "components/Welcome/WelcomeBanner";
import ExpolreBanner from "./ExpolreBanner";
import ImageDescriptionBanner from "./ImageDescriptionBanner";
import ImageOverlay from "components/Overlay/ImageOverlay";
import Unilink from "custom/Unilink";
import AboutusDesc from "components/Aboutus/AboutusDesc";
import InfoCardGroup from "components/Welcome/InfoCardGroup";
import AboutTeacher from "components/Welcome/AboutTeacher";
import Feature from "components/Welcome/Feature";
import Sport from "components/Welcome/Sport";

export default function Welcome() {
  return (
    <>
      <WelcomeBanner />
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <InfoCardGroup />
          </div>

          <div className=" px-8">
            <div className="flex justify-between text-black container mx-auto py-20">
              <AboutusDesc />
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <Feature />

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-600">
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
                  <Unilink className="text-xl font-bold text-white" link='/welcome/alumini' title='Alumini' description='' />
                  <p className="text-md font-light mt-2 text-white">
                    A movement to connect - Alumni, Teachers, Principals, Managers and Students along with associates and friends of ADS for UNITED growth of all
                    </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Sport />

      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <AboutTeacher />
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
      </section>
      <ExpolreBanner />
      <Birthday />
      <ImageOverlay />
    </>
  )
}