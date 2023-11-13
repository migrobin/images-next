import { Unsplash } from "@/models/unsplash"
import Image from "next/image"
import Link from "next/link"
import { Alert } from "@/components/bootstrap"
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Dynamic Fetch - Next Js',
}




export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random/?client_id=" + process.env.UNSPLASH_KEY, {
        cache: "no-cache"
    })

    const image: Unsplash = await response.json()
    const width = Math.min(500, image.width)
    const height = (width / image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert> Fetches at run time</Alert>
            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description ?? "image"}
                className="rounded shadow mw-100 h-100"
            />

            by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>

        </div>
    )

}