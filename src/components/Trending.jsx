import React from "react";
import Collcard from "./atoms/Collcard";
import Headinfo from "./atoms/Headinfo";

export default function Trending() {

    return (
        <div className="desktop:max-w-5xl   mt-20 mx-auto tablet:max-w-3xl">

            <Headinfo Header={"Trending Collection"} paragraph={"Checkout our weekly updated trending collection."} />
            <div className="flex justify-center gap-[30px] flex-wrap ">
                <Collcard imageCard={"@/../public/images/image/Primary Photo Placeholder-3.svg"} imageAvatar={"@/../public/images/icons/Avatar Placeholder.svg"} cardName="Space Walking" personName="MrFox" />
                <Collcard imageCard={"@/../public/images/image/Primary Photo Placeholder-2.svg"} imageAvatar={"@/../public/images/icons/Be Avatar Placeholder.svg"} cardName="Magic Mushrooms" personName="Shroomie" />
                <Collcard imageCard={"@/../public/images/image/Primary Photo Placeholder-4.svg"} imageAvatar={"@/../public/images/icons/Fox Placeholder.svg"} cardName="Disco Machines" personName="BeKind2Robots" />
            </div>
        </div>
    )
}