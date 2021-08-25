import React from 'react'
import expert01 from "../images/expert01.png"
import expert02 from "../images/expert02.png"
import expert03 from "../images/expert03.png"
import expert04 from "../images/expert04.png"

export default function App() {
    return (
        <div className=" xl:container-full   container mx-auto lg:mt-36 lg:mb-28">
            <div className="grid md:grid-cols-2 gap-5 sm:gap-10 lg:gap-20">
                <div className="justify-center md:justify-start flex ml-36">
                    <div className="bg-gray pl-7 py-6 pr-3 flex items-end max-w-xs w-80 h-36 justify-between">
                        <div className="pr-3.5">
                            <p className="font-bold mb-3">Dr. Crisanto Antonio Bello Vetencourt</p>
                            <p className="text-sm">President</p>
                            <p className="text-sm">Based at Seville</p>
                        </div>
                        <img src={expert01} alt="" className="img-responsive" />
                    </div>
                </div>
                <div className="justify-center md:justify-end flex mr-24">
                    <div className="bg-gray pl-7 py-6 pr-3 flex max-w-xs w-80 h-32 justify-between">
                        <div className="pr-3.5 flex items-center">
                            <div className="">
                                <p className="font-bold mb-3">José Daniel González</p>
                                <p className="text-sm">Executive Vice President</p>
                                <p className="text-sm">Based at Seville</p>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <img src={expert02} alt="" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center my-5 sm:my-10 md:my-12">
                <div className="text-2xl sm:text-3xl md:text-4xl xl:text-xxl max-w-sm md:max-w-lg xl:max-w-3xl text-center mx-auto font-bold leading-loose sm:leading-15 xl:leading-20">We are  <span className="text-orange px-2 pb-2">experts</span>  who lend a <span className="text-blue px-2 pb-2">helping hand</span> to our clients</div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-10 lg:gap-20 mx-auto">
                <div className="justify-center md:justify-start flex ml-48">
                    <div className="bg-gray pl-7 py-6 pr-3 flex items-end max-w-xs w-80 h-36 justify-between">
                        <div className="pr-3.5">
                            <p className="font-bold  mb-3">Abel Aranda</p>
                            <p className="text-sm">Nationality and Immigration Based at Seville</p>
                        </div>
                        <img src={expert03} alt="" className="img-responsive" />
                    </div>
                </div>
                <div className="justify-center md:justify-end flex mr-40">
                    <div className="bg-gray pl-7 py-6 pr-3 flex items-end max-w-xs w-80 h-32 justify-between">
                        <div className="pr-3.5">
                            <p className="font-bold  mb-3">Mariantonia Palacios</p>
                            <p className="text-sm">Communications Based at Medellín</p>
                        </div>
                        <img src={expert04} alt="" className="img-responsive" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5 sm:mt-10 md:mt-14">
                <button className="btn-primary capitalize">meet our specialists</button>
            </div>
        </div>
    )
}
