import React from "react";

import Artistcard from "./atoms/Artistcard";
import Button from "./atoms/Button";
import Headinfo from "./atoms/Headinfo";


export default function Creators() {

    return (
        <div className=" flex flex-col max-w-[1050px] m-auto mt-20">
            <div className="flex items-center justify-between">
                <Headinfo Header={"Top Craetors"} paragraph={"Checkout Top Rated Creators on the NFT Marketplace"} />
                <Button imgBefore={"@/../public/images/icons/RocketLaunch.svg"} action={"View Rankings"} />
            </div>
            <Artistcard />
        </div>
    )
}