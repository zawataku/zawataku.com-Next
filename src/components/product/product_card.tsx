import React from "react";

type ProductProps = {
    name: string
    description: string
    imgURL: string
    linkURL: string
}

export default function ProductCard({ name, description, imgURL, linkURL }: ProductProps) {
    return (
        <a className="group z-0" href={linkURL}>
            <div className="relative overflow-hidden rounded-xl border-2 border-slate-400 pt-[50%] sm:pt-[70%]"> 
                <img className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgURL} alt="Image Description" />
            </div>

            <div className="mt-2">
                <h3 className="text-base text-slate-900 group-hover:text-slate-500">{name}</h3>
                <p className="mt-3 text-sm text-slate-900 group-hover:text-slate-500">{description}</p>
            </div>
        </a>
    )
}