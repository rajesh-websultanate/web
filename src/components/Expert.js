import React from 'react'
import expert01 from "../images/expert01.png"
import expert02 from "../images/expert02.png"
import expert03 from "../images/expert03.png"
import expert04 from "../images/expert04.png"

export default function App() {
    return (
        <div className="container mx-auto px-5 sm:px-10 my-5 sm:my-10 lg:my-20">
            <div className="grid md:grid-cols-2 gap-5 sm:gap-10 lg:gap-20">
                <div className="justify-center md:justify-start flex">
                    <div className="bg-gray p-4 flex items-end max-w-xs">
                        <div className="pr-10">
                            <p className="font-bold">Dr. Crisanto Antonio Bello Vetencourt</p>
                            <p>President Based at Seville</p>
                        </div>
                        <img src={expert01} alt="" className="img-responsive" />
                    </div>
                </div>
                <div className="justify-center md:justify-end flex">
                    <div className="bg-gray p-4 flex items-end max-w-xs">
                        <div className="pr-10">
                            <p className="font-bold">José Daniel González</p>
                            <p>Executive Vice President Based at Seville</p>
                        </div>
                        <img src={expert02} alt="" className="img-responsive" />
                    </div>
                </div>
            </div>
            <div className="text-center my-5 sm:my-10 lg:my-14">
                <div className="text-2xl sm:text-3xl md:text-4xl xl:text-xxl max-w-sm md:max-w-lg xl:max-w-4xl text-center mx-auto font-bold leading-loose sm:leading-15 xl:leading-20">We are  <span className="text-orange px-2 pb-2">experts</span>  who lend a <span className="text-blue px-2 pb-2">helping hand</span> to our clients</div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-10 lg:gap-20">
                <div className="justify-center md:justify-start flex">
                    <div className="bg-gray p-4 flex items-end max-w-xs">
                        <div className="pr-10">
                            <p className="font-bold">Abel Aranda</p>
                            <p>Nationality and Immigration Based at Seville</p>
                        </div>
                        <img src={expert03} alt="" className="img-responsive" />
                    </div>
                </div>
                <div className="justify-center md:justify-end flex">
                    <div className="bg-gray p-4 flex items-end max-w-xs">
                        <div className="pr-10">
                            <p className="font-bold">Mariantonia Palacios</p>
                            <p>Communications Based at Medellín</p>
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
