import React from 'react'
import c01 from '../images/c02.png'
import c02 from '../images/c01.png'

export default function Carousel() {
    return (
        <div className="py-20 container mx-auto grid grid-cols-2">
            <img src={c02} alt="" className="img-responsive" />
           <img src={c01} alt="" className="img-responsive" />           
        </div>
    )
}
