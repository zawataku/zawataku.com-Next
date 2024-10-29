import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex h-screen items-center justify-center" aria-label="読み込み中">
            <div className="size-9 animate-ping rounded-full bg-accent"></div>
            <div className="mx-12 size-9 animate-ping rounded-full bg-accent"></div>
            <div className="size-9 animate-ping rounded-full bg-accent"></div>
        </div>
    );
};

export default Loading;