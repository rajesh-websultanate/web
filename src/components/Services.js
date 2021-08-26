import React from 'react'
import Profile01 from '../images/profile01.png'
import Euro from '../images/euro.png'

export default function Services() {
    return (
        <div className="lg:container-full mx-auto px-16 my-32">
            <p className="text-lg md:text-2xl lg:heading mb-0 sm:mb-10 xl:mb-16 text-center font-bold mb-16">Genealogy Services</p>
            <div className="lg:pl-24 pb-20 section shadow-md lg:pb-16 flex">
                <div className="bg-light-gray w-33rem py-20">
                    <div className="text-center">
                        <img src={Profile01} alt="" className="block mx-auto mb-16" />
                        <div className="flex items-start justify-center mb-5">
                            <img src={Euro} alt="" className="h4" />
                            <p className="font-bold text-primary h1 landing-3-75">50</p>
                        </div>
                        <p className="h5 font-bold">Genealogical Research</p>
                    </div>
                </div>
                <div className="pl-32 pr-24">
                    <ul className="list-none unorder-list my-20">
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
