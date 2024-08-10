import Link from "next/link";

const Header = () => {
    return(
        <header className="fixed w-full h-20 flex items-center bg-amber-950 text-slate-50">
        <nav className="w-full flex items-center justify-between m-10 max-w-screen-x1">
            <Link href="/">Logo</Link>
            <ul className="flex items-center gap-10">
                <li><Link href="/">inicio</Link></li>
                <li><Link href="/public">publica</Link></li>
                <li><Link href="/private">privada</Link></li>
                <li><button>sair</button></li>
            </ul>
        </nav>
        </header>
    )
}

export { Header }