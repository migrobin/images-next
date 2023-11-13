import { Alert } from "@/components/bootstrap"
export default async function Page() {
    await new Promise((resolve => setTimeout(resolve, 2000)))

    return <div>
        <Alert> setTimeout with 2 seconds delay </Alert>

        hi there</div>
}