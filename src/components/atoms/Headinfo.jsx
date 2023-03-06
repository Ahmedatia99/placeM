import React from "react";

export default function Headinfo({Header, paragraph}){
    return(
        <div className="mb-14 flex flex-col">
            <h3>{Header}</h3>
            <p>{paragraph}</p>
        </div>
    )
}