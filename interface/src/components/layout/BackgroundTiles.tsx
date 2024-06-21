"use server";

export default async function BackgroundTiles() {
    return (
        <div className="fixed inset-0 bg-gray-300 -z-50">
            <div
                className="bg-center bg-repeat opacity-5 h-full w-full"
                style={{
                    backgroundImage:
                        "url('/images/background-tiles-light.png')",
                    backgroundSize: "400px",
                }}
            ></div>
        </div>
    );
}
