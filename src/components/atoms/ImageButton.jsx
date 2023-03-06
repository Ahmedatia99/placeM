import React from "react";

export default function ImageButton({ imageIcon1, imageIcon2, info }) {
    return (
        <div className="flex gap-[15px]  ">
            <button className="rounded-2xl overflow-hidden hover:scale-95 transition-all">
                <img src={imageIcon1} className="w-[100px] " />
            </button>
            <button className="rounded-2xl  overflow-hidden hover:scale-95 transition-all">
                <img src={imageIcon2} className="w-[100px] " />
            </button>

            <button className="w-[100px]  rounded-2xl bg-action flex justify-center flex-col items-center font-['space_mono']  overflow-hidden hover:scale-95 transition-all">{info}</button>
        </div>
    )
}