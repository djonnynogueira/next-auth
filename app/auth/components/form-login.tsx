'use client'

import { useState } from "react"

const LoginForm = () => {
    const [error, setError] = useState()

    return (
        <div>
            <form>
                <h1>Login</h1>
                <p>Faça login para continuar.</p>

                <div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" onChange={() => { }} className="border rounded w-fit p-3" />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="text" name="password" onChange={() => { }} className="border rounded w-fit p-3" />
                    </div>
                    {error && <span className="text-rede-400 text-sm block mt-2 ">{error}</span>}
                    <button type="submit" className="mt-10 br-rose-950 text-slate-50 p-3 rounded">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export { LoginForm }