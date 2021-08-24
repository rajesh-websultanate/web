import React from 'react'
import b1 from '../images/banner01.png'
import buser from '../images/users.png'
import { Link } from 'react-router-dom'

export default function Banner() {

    const changeHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="">
            <div className="grid grid-cols-2">
                <div className="flex items-end">
                    <div className="pb-32 pl-10">
                        <p className="text-lg text-dark font-bold">Multiple Services, One Goal:</p>
                        <p className="text-7xl mb-9 text-primary font-bold">Your Nationality.</p>
                        <p className="text-base text-light mb-14 w-3/4">We make your dreams come true. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at egestas ornare ac magna dignissim commodo ipsum.</p>
                        <input type="email" name="email" className="focus:outline-none focus:border-none w-80 p-3 input" placeholder="Enter Email" onChange={changeHandler} />
                        <button className="btn-primary mb-6">GET STARTED</button>
                        <Link to="/"><img src={buser} alt="" /></Link>
                    </div>
                </div>
                <div className="relative flex justify-end">
                    <div className="overflow-hidden">
                        <img src={b1} alt="" className="img-responsive img-banner-translate" />
                    </div>
                </div>
            </div>
        </div>
    )
}
