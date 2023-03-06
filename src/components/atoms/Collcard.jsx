import React from "react";
import classNames from 'classnames'
import ImageButton from "./ImageButton";

export default function Collcard({imageCard,imageAvatar,personName,cardName}){
    return(
        <div className="gap-4 flex flex-col max-w-[330px] ">
            <button className="hover:scale-95 transition-all">
                <img src={imageCard} className=""/>
            </button>

            <ImageButton imageIcon1={"@/../public/images/image/Primary Photo Placeholder-4.svg"} imageIcon2={"@/../public/images/image/Primary Photo Placeholder-2.svg "}
            info={"1024+"}
            />

            <div className={classNames("bg-background pb-3 pl-1")}>
                <h3 className="ml-2 mb-2.5  text-xl">{cardName}</h3>
                <div className="flex items-center ">
                    <img src={imageAvatar} className="w-6 h-6 mx-2" />
                    <span className="text-base">{personName}</span>
                </div>
            </div>
        </div>
        
    )
}