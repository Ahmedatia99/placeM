import React from 'react'
import data from '../../config/members.json'

export default function Artistcard() {
    return (
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center  m-auto">
            {data.map((user) => {
                return (
                    <button
                        className="p-5  flex flex-col justify-center items-center relative bg-secbackground rounded-2xl w-[240px] hover:scale-95 transition-all"
                        key={user.num}
                    >
                        <span className="absolute top-0 left-0 bg-background w-8 h-8 rounded-full flex justify-center  m-5 text-label">
                            {user.num}
                        </span>
                        <img src={user.imageUrl} className=" mb-5 w-28" />
                        <h4 className="text-xl ">{user.name}</h4>
                        <p className="font-spaceMono text-sm ">
                            {' '}
                            <span className="text-label text-sm ">Total Sales:</span> 34.53 ETH
                        </p>
                    </button>
                )
            })}
        </div>
    )
}
