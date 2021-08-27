import React from 'react'
import Profile01 from '../images/profile01.png'
import Euro from '../images/euro.png'

export default function Services() {
    return (
        <div className="container-full mx-auto px-4 xl:px-4-3 lg:my-20 xl:my-32">
            <p className="text-2xl lg:heading mb-0 sm:mb-10 xl:mb-16 md:text-center font-bold lg:mb-16 mb-11">Genealogy Services</p>
            <div className="lg:pl-14 xl:pl-24 pb-20 section shadow-md lg:pb-14 lg:flex">
                <div className="bg-light-gray lg:w-33rem pt-14 pb-14 lg:py-20">
                    <div className="text-center">
                        <img src={Profile01} alt="" className="block mx-auto mb-16" />
                        <div className="flex items-start justify-center mb-2.5 md:mb-5">
                            <img src={Euro} alt="" className="h4" />
                            <p className="font-bold text-primary h1 landing-3-75">50</p>
                        </div>
                        <p className="h5 font-bold">Genealogical Research</p>
                    </div>
                </div>
                <div className="px-5 lg:px-20 xl:pl-32 xl:pr-32">
                    <ul className="list-none unorder-list mt-14 mb-9 lg:my-20">
                        <li>Comprehensive research journal</li>
                        <li>Copies of all images and documents</li>
                        <li>Professional summary of the completed research</li>
                        <li>Online family tree</li>
                        <li>Analysis of DNA results related to your research goal (if available)</li>
                    </ul>
                    <button className="btn-primary">GET STARTED NOW</button>
                </div>
            </div>
        </div>
    )
}
