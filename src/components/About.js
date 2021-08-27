import React from 'react'
import Video from '../images/Video.png'

export default function About() {
    return (
        <div className="bg-gray lg:bg-transparent">
            <div className="container-full mx-auto px-4 xl:pr-0 xl:pl-4-3 pb-14 lg:pb-0">
                <div className="section">
                    <div className="grid lg:grid-cols-2 gap-0 about-shadow">
                        <div className="px-5 xl:pl-28 lg:pl-14 lg:mt-14 lg:pr-10.5 mt-11 sm:mt-14 xl:mt-40">
                            <h4 className="text-2xl lg:heading md:h4 mb-5 sm:mb-7 font-bold">Sefar Universal</h4>
                            <div className="md:pr-24">
                                <p className="mb-6">We are a company made up of highly specialized professionals from truly diverse and highly specialized fields, experts in advising, processing and managing the documentation necessary to help our clients establish their residence in the place of their choice.</p>
                                <p className="mb-10 xl:mb-4-5">We operate in Venezuela, Colombia, the United States, Mexico, Spain, Italy and Portugal.</p>
                            </div>
                            <button className="btn-primary mx-0">FIND OUT MORE</button>
                        </div>
                        <div className="flex px-5 lg:px-0 justify-center xl:justify-end xl:pt-4-3 xl:pb-4-3">
                            <img src={Video} alt="" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
