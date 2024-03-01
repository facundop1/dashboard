import React from 'react'

export default function CreatePost() {
    return (
        <div class="p-4  ">
            <section class="bg-slate-800 p-4 rounded">

                <p class="text-white mb-2">Crear nuevo post</p>
                <div class="border-t-[0.1rem] border-red-600"/>
                <section class="mt-4">
                    <div class="mb-4">
                        <p class="text-white mb-2">Titulo</p>
                        <input class="border-none outline-none rounded bg-slate-500 text-white placeholder-white p-1" placeholder='Lorem ipsum'/>
                    </div>

                    <div class="mb-4">
                        <p class="text-white mb-2 ">Texto</p>
                        <textarea class="resize-none border-none outline-none w-96 h-60 rounded bg-slate-500 text-white placeholder-white p-1" placeholder='Lorem ipsum' />
                    </div>

                    <button class="text-white bg-slate-500 rounded px-6 py-2">Enviar</button>
                </section>
            </section>
        </div>
    )
}
