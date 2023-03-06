import React from "react";

 export default function Highlight({imageCard,cardName,imageAvatar,personName}){
    return (
        <div className=" rounded-2xl lg:max-w-lg overflow-hidden md:max-w-xs sm:max-w-xs">
            <img src={imageCard} className=""/>
            <div className="bg-secbackground pb-3 pl-1">
                <h3 className="ml-2 mb-2.5 pt-5 text-xl">{cardName}</h3>
                <div className="flex items-center ">
                    <img src={imageAvatar} className="w-6 h-6 mx-2" />
                    <span className="text-base">{personName}</span>
                </div>
            </div>
        </div>
    )
 }