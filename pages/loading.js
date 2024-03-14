import Loader from "@/components/Loader";

export default function Loading() {
    console.log("we react here")
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <Loader/>
        </div>
    </div>
}