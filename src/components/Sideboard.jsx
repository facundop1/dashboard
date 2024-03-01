import React from 'react'

export default function Sideboard() {
    return (
        <div class="bg-slate-500 fixed h-full left-0 top-[90px] w-80 text-white">
            <section class="flex p-4 ">
                <div class="bg-sideboard-pfp w-14 h-14 bg-cover" />
                <div class="pl-4">
                    <p class="text-white">Admin</p>
                    <p class="text-green">● online</p>
                </div>
            </section>

            <div class="bg-slate-800 p-4">
                <p class=" text-white pb-2">Dashboard</p>
                <div class="border-t-[0.1rem] border-red-600"></div>
            </div>

            <section class="bg-slate-800 px-4 pb-4 flex flex-col gap-2 h-full">
                <p class="text-white">Crear nuevo post</p>
                <p class="text-white">Editar post</p>
                <p class="text-white">Eliminar post</p>
            </section>

        </div>
    )
}
