import Link from "next/link";

export default function NavBar() {
    return(
        <nav>
            <div className="flex flex-row gap-20 border border-2 p-5">
                <div>baysalt.dev</div>
                <div className="flex flex-row gap-10">
                    <Link href="/home">/home</Link>
                    <Link href="/projects">/projects</Link>
                    <Link href="/fun">/fun</Link>
                </div>
            </div>
        </nav>
    )
}