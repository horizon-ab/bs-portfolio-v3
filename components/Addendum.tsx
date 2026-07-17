import './Addendum.scss'
export default function Addendum() {
    return (
        <>
            <div className="triangle-shape" />
            <div className="fixed bottom-8 right-8 text-right bg-pink-500">
                <h1 className="text-4xl font-bold text-white">Addendum</h1>
                <p className="mt-4 text-lg text-white max-w-sm">
                    Notice how this text naturally flows down the screen.
                </p>
            </div>
        </>
    );
}