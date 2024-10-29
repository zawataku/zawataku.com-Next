export default function Frame() {
    return (
        <>
            <div className="fixed top-0 z-50 h-6 w-full bg-secondary"></div>
            <div className="fixed right-0 top-0 z-50 h-screen w-8 bg-secondary"></div>
            <div className="fixed left-0 top-0 z-50 h-screen w-8 bg-secondary"></div>
            <div className="fixed bottom-0 z-50 h-6 w-full bg-secondary"></div>
        </>
    )
}