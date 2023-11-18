import { Unsplash } from "@/models/unsplash"
import { Alert } from "@/components/bootstrap"
import Image from "next/image"
import styles from "./TopicPage.module.css"



type PageProps = {
    params: { topic: string },
    // searchParams:
}

export const dynamicParams = false // only allow the ues of the generated params apples and coding

export function generateStaticParams() {
    return ["apples", "coding"].map(topic => ({ topic }))
}

export default async function Page({ params: { topic } }: PageProps) {
    const response = await fetch(`https://api.unsplash.com/photos/random/?query=${topic}&count=10&client_id=${process.env.UNSPLASH_KEY}`)
    const images: Unsplash[] = await response.json()

    return (
        <div>
            <Alert>fetches 10 pics about {topic} </Alert>

            {images.map(image => (

                <Image
                    src={image.urls.raw}
                    width={250}
                    height={250}
                    alt={image.alt_description ?? "image"}
                    className={styles.image}
                    key={image.urls.raw}


                />


            ))}


        </div >
    )
}