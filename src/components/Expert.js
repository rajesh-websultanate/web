import React from 'react'
import expert01 from "../images/expert01.png"
import expert02 from "../images/expert02.png"
import expert03 from "../images/expert03.png"
import expert04 from "../images/expert04.png"

export default function App() {
    return (
        <div className="container-full mx-auto lg:mt-36 md:mb-32 mt-3-7">
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-20">
                <div className="ml-4 xl:ml-9-3rem">
                    <div className="bg-gray pl-7 py-6 pr-3 flex items-end max-w-xs w-64 sm:w-80 h-36 justify-between">
                        <div className="sm:pr-3.5">
                            <p className="font-bold mb-3">Dr. Crisanto Antonio Bello Vetencourt</p>
                            <p className="text-xs sm:text-sm">President</p>
                            <p className="text-xs sm:text-sm">Based at Seville</p>
                        </div>
                        <img src={expert01} alt="" className="w-14 sm:img-responsive" />
                    </div>
                </div>
                <div className="justify-end flex mr-4 xl:mr-28">
                    <div className="bg-gray pl-7 py-6 pr-3 flex max-w-xs w-64 sm:w-80 h-32 justify-between">
                        <div className="sm:pr-3.5 flex items-center">
                            <div className="">
                                <p className="font-bold mb-3">José Daniel González</p>
                                <p className="text-xs sm:text-sm">Executive Vice President</p>
                                <p className="text-xs sm:text-sm">Based at Seville</p>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <img src={expert02} alt="" className="w-14 sm:img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12">
                <div className="text-xxl px-4 md:max-w-lg lg:max-w-2xl xl:max-w-3xl text-center mx-auto font-bold  xl:leading-20">We are  <span className="text-orange px-2 pb-2">experts</span>  who lend a <span className="text-blue px-2 pb-2">helping hand</span> to our clients</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 lg:gap-20 mx-auto">
                <div className="ml-4 lg:ml-20 xl:ml-12-5rem mt-12 xl:mt-16">
                    <div className="bg-gray pl-7 py-6 pr-3 flex items-center sm:items-end max-w-xs w-64 sm:w-80 h-36 justify-between">
                        <div className="pr-2 sm:pr-3.5">
                            <p className="font-bold  mb-3">Abel Aranda</p>
                            <p className="text-xs sm:text-sm">Nationality and Immigration Based at Seville</p>
                        </div>
                        <div className="flex items-end h-full sm:inline-block">
                            <img src={expert03} alt="" className="w-20 sm:img-responsive" />
                        </div>
                    </div>
                </div>
                <div className="justify-end flex mr-4 lg:mr-20 xl:mr-10-5rem">
                    <div className="bg-gray pl-7 py-6 pr-3 flex items-end max-w-xs w-64 sm:w-80 h-32 justify-between xl:mt-12">
                        <div className="sm:pr-3.5">
                            <p className="font-bold  mb-3">Mariantonia Palacios</p>
                            <p className="text-xs sm:text-sm pr-10 sm:pr-0">Communications Based at Medellín</p>
                        </div>
                        <img src={expert04} alt="" className="w-14 sm:img-responsive" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:mb-0 sm:px-4 my-12 lg:px-0">
                <button className="btn-primary uppercase mx-4">meet our specialists</button>
            </div>
        </div>
    )
}
