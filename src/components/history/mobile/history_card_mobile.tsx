import React from "react";

type HistoryCard_Mobile = {
    title: string;
    body: string;
    imgURL: string;
};

export default function HistoryCard_Mobile({ title, body, imgURL }: HistoryCard_Mobile) {
    const formatBodyText = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <li className="lg:hidden md:hidden">
            <hr />
            <div className="timeline-middle collapse collapse-arrow bg-white border-2 border-slate-300 ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-slate-900">{title}</div>
                <div className="collapse-content">
                    <div className="border-t-2 border-slate-300"></div>
                    <p className="my-4 text-slate-600">{formatBodyText(body)}</p>
                    <img className="rounded-lg" src={imgURL} alt="Timeline Image" />
                </div>
            </div>
            <hr />
        </li>
    );
}