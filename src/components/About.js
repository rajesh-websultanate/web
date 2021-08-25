import React from 'react'
import Video from '../images/Video.png'

export default function About() {
    return (
        <div className="container mx-auto px-5 sm:px-10">
            <div className="pt-5 sm:pt-10 lg:py-16 section">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10 md:gap-20">
                    <div className="flex items-end">
                        <div className="px-5 sm:px-10 lg:pl-16 lg:pr-32">
                            <h4 className="text-lg sm:text-2xl md:h4 mb-5 font-bold">Sefar Universal</h4>
                            <p className="mb-5">We are a company made up of highly specialized professionals from truly diverse and highly specialized fields, experts in advising, processing and managing the documentation necessary to help our clients establish their residence in the place of their choice.</p>
                            <p className="mb-14">We operate in Venezuela, Colombia, the United States, Mexico, Spain, Italy and Portugal.</p>
                            <button className="btn-primary">FIND OUT MORE</button>
                        </div>
                    </div>
                    <div className="flex justify-center xl:justify-end">
                        <img src={Video} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
