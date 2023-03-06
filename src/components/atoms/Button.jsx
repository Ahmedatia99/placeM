import React from "react";
import classNames from "classnames";

export default function Button ({imgBefore, action}) {
    return(
        <button className={`flex items-center justify-center bg-action text-white py-3 px-5 rounded-xl tablet:w-auto mobile:w-full border-2 border-solid border-action hover:bg-background transition-all`}>
            {imgBefore && <img src={imgBefore} alt=""/>}
            <span className="text-[16px] px-2">{action}</span>
        </button>
    )
}

