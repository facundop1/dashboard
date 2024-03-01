import React from 'react'

export default function Sideboard() {
    return (
        <div>
            <section class="flex">
                <div class="bg-sideboard-pfp w-14 h-14 bg-cover" />
                <div>
                    <p class="">Admin</p>
                    <p class="text-green-400">● online</p>
                </div>
            </section>
            <div class="">
                <p>Dashboard</p>
            </div>

            <section class="">
                <p class="">Crear nuevo post</p>
                <p class="">Actualizar post</p>
                <p class="">Eliminar post</p>
            </section>

        </div>
    )
}
