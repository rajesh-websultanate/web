import React from 'react'
import Profile01 from '../images/profile01.png'
import Euro from '../images/euro.png'

export default function Services() {
    return (
        <div className="container mx-auto mt-5 lg:mb-24 sm:mt-10 px-5 xl:px-10 ">
            <p className="text-lg md:text-2xl lg:text-3xl xl:heading mb-0 sm:mb-10 xl:mb-16 text-center font-bold">Genealogy Services</p>
            <div className="sm:grid  lg:grid-cols-2 gap-5 px-5 sm:px-10 lg:px-16 section shadow-md pb-5 sm:pb-10 lg:pb-16">
                <div className="bg-light-gray pb-5 sm:pb-10">
                    <div className="text-center mt-5 sm:mt-12">
                        <img src={Profile01} alt="" className="block mx-auto pt-5 sm:pt-0 lg:pt-10 xl:pt-0" />
                        <div className="flex items-start justify-center mt-5 sm:mt-8">
                            <img src={Euro} alt="" className="mt-9" />
                            <p className="font-bold text-primary h1">50</p>
                        </div>
                        <p className="h5 font-bold">Genealogical Research</p>
                    </div>
                </div>
                <div className="px-5 md:px-10 lg:px-16">
                    <ul className="list-none unorder-list my-5  md:my-12">
                        <li className="flex items-start mr-4 mb-3">Comprehensive research journal</li>
                        <li className="flex items-start mr-4 mb-3">Copies of all images and documents</li>
                        <li className="flex items-start mr-4 mb-3">Professional summary of the completed research</li>
                        <li className="flex items-start mr-4 mb-3">Online family tree</li>
                        <li className="flex items-start mr-4 mb-3">Analysis of DNA results related to your research goal (if available)</li>
                    </ul>
                    <button className="btn-primary">GET STARTED NOW</button>
                </div>
            </div>
        </div>
    )
}
