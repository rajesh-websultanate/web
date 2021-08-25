import React from 'react'
import b1 from '../images/banner01.png'
import buser from '../images/users.png'
import { Link } from 'react-router-dom'

export default function Banner() {

    const changeHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="px-5 md:pl-9 md:pr-0 mx-auto my-10">
            <div className="md:flex">
                <div className="md:flex items-end md:w-3/5 mb-14">
                    <div>
                        <p className="text-lg text-dark font-bold mb-2 md:pl-2">Multiple Services, One Goal:</p>
                        <p class="text-2xl md:text-3xl md:text-5xl xl:text-7xl mb-3 md:mb-7 text-primary font-extrabold uppercase">Your Nationality.</p>
                        <p className="text-sm md:text-base text-light mb-5 sm:mb-10 md:mb-14 sm:w-3/5">We make your dreams come true. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at egestas ornare ac magna dignissim commodo ipsum.</p>
                        <div className="flex align-center mb-6">
                            <input type="email" name="email" className="focus:outline-none focus:border-none w-1/2 md:w-80 p-3 input" placeholder="Enter Email" onChange={changeHandler} />
                                <button className="btn-primary">GET STARTED</button>                                
                        </div>
                        <Link to="/"><img src={buser} alt="" /></Link>
                    </div>
                </div>
                <div className="relative flex justify-end w-2/5 hidden md:block">
                    <div className="overflow-hidden">
                        <img src={b1} alt="" className="img-responsive img-banner-translate" />
                    </div>
                </div>
            </div>
        </div>
    )
}
