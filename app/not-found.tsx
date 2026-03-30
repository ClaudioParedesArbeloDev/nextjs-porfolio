import Image from "next/image"

export default function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <Image src="/404.png" alt="404" width={600} height={600} />
        </div>
    )
}