import React from "react";

type HistoryCard_Noimg_Mobile = {
    title: string;
    body: string;
};

export default function HistoryCard_Noimg_Mobile({ title, body }: HistoryCard_Noimg_Mobile) {
    const formatBodyText = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <li className="lg:hidden md:hidden w-full">
            <hr />
            <div className="timeline-middle collapse collapse-arrow bg-white border-2 border-slate-300">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-slate-900">{title}</div>
                <div className="collapse-content">
                    <div className="border-t-2 border-slate-300"></div>
                    <p className="mt-4 text-slate-600">{formatBodyText(body)}</p>
                </div>
            </div>
            <hr />
        </li>
    );
}