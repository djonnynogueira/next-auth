'use client'

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function SignOutButton() {
    return (
        <div>

            <button onClick={() => signOut()}>sair</button>

        </div>
    )
}