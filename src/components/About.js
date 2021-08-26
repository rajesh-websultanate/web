import React from 'react'
import Video from '../images/Video.png'

export default function About() {
    return (
        <div className="lg:container-full mx-auto px-16">
            <div className="section">
                <div className="grid grid-cols-2 gap-0">
                    <div className="pl-24 pr-10.5 mt-40">
                        <h4 className="text-lg sm:text-2xl lg:heading md:h4 mb-7 font-bold">Sefar Universal</h4>
                        <div className="pr-24">
                            <p className="mb-6">We are a company made up of highly specialized professionals from truly diverse and highly specialized fields, experts in advising, processing and managing the documentation necessary to help our clients establish their residence in the place of their choice.</p>
                            <p className="mb-4-5">We operate in Venezuela, Colombia, the United States, Mexico, Spain, Italy and Portugal.</p>
                        </div>
                        <button className="btn-primary">FIND OUT MORE</button>
                    </div>
                    <div className="flex justify-center xl:justify-end my-16">
                        <img src={Video} alt="" className="img-responsive" />
                    </div>
                </div>
            </div>
        </div>
    )
}
