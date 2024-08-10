import Link from "next/link";

export default function DeniedPage () {
    return(
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-3x1 ext-slate-600 mb-10">Acesso restrito</h1>
            <p className="text-base t ext-slate-600 mb-10">Você não tem permissão para prosseguir.</p>
            <Link href='/' className="p-4 bg-amber-950 text-slate-50">Voltar</Link>
        </div>
    )
}