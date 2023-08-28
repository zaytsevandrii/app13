import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import Link from "next/link"
import React, { Suspense } from "react"

const RepoPage = ({ params: { name } }) => {
    return (
        <div className="card">
            <Link className="btn btn-back" href="/code/repos">
                Back To Repositories{" "}
            </Link>
            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage
