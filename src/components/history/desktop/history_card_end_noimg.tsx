import React from "react";

type HistoryCard_End_Noimg = {
    title: string;
    body: string;
};

export default function HistoryCard_End_Noimg({ title, body }: HistoryCard_End_Noimg) {
    const formatBodyText = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <li className="hidden lg:grid md:grid">
            <hr />
            <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-end mb-5 collapse collapse-arrow bg-white border-2 border-slate-300">
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