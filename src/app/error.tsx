"use client"

import { Button } from "react-bootstrap"

type ErrorPageProps = {
    error: Error,
    reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
    return (
        <div>
            <h1>Error</h1>
            <p>Something went wrong</p>
            Error: {error.message} <Button onClick={reset}> Try again</Button>
        </div>
    )
}