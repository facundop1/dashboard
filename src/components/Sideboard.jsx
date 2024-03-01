import React from 'react'

export default function Sideboard() {
    return (
        <div class="bg-slate-500 mt-10">
            <section class="flex p-4">
                <div class="bg-sideboard-pfp w-14 h-14 bg-cover" />
                <div class="pl-4">
                    <p class="text-white">Admin</p>
                    <p class="text-green">● online</p>
                </div>
            </section>
            <div class="bg-slate-800 p-4 shadow-md">
                <p class="text-center text-white">Dashboard</p>
            </div>

            <section class="bg-slate-800 px-4 pb-4">
                <p class="text-white">Crear nuevo post</p>
                <p class="text-white">Actualizar post</p>
                <p class="text-white">Eliminar post</p>
            </section>

        </div>
    )
}
