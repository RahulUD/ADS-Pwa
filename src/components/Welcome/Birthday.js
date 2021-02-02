import React, { useEffect } from "react";
import BirthdayWallpaper from './../../assets/img/birthday.jpg'
import ThreeCrousel from './../../components/Crousel/3Crousel'

export default () => {
  return (
    <>
      <section className="pt-20 pb-48 bg-blue-900"
        style={{
          backgroundImage: `url(${BirthdayWallpaper})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-12 px-4">
              <h2 className="text-4xl font-semibold text-white">Birthday</h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <ThreeCrousel />
          </div>
        </div>
      </section>

    </>
  )
}

