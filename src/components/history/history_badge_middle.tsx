import React from "react";

type HistoryBadge_Middle = {
    date: string;
}

export default function HistoryBadge_Middle({ date }: HistoryBadge_Middle) {
    return (
        <li>
            <hr />
            <div className="timeline-middle">
                <div className="flex items-center bg-slate-900 text-slate-50 rounded-full size-20">
                    <p className="mx-auto text-2xl">{date}</p>
                </div>
            </div>
            <hr />
        </li>
    )
}