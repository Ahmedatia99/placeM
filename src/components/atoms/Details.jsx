import React from "react";

export default function Details({number, description}){
    return(
        <div className="">
            <h2 className='font-["space_mono"]'>{number}</h2>
            <span className='desktop:text-2xl tablet:text-base mobile:text-xs'>{description}</span>
      </div>
    )
}