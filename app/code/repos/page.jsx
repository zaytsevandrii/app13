import Link from "next/link"
import React from "react"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

async function fetchRepos() {
    const response = await fetch("http://api.github.com/users/zaytsevandrii/repos")
    await new Promise((resolve11) => setTimeout(resolve11, 400))
    const repos = await response.json()
    return repos
}
const ReposPage = async () => {
    console.log("dsds")
    const repos = await fetchRepos()
    return (
        <div className="repos-container">
            <h2>Repositories</h2>
            <ul className="repo-list">
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar />
                                    {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch />
                                    {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye />
                                    {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposPage
