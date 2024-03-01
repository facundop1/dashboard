import React from 'react'

export default function CreatePost() {
    return (
        <div className="p-4">
            <section className="bg-slate-800 p-4 rounded">
                <p className="text-white mb-2">Crear nuevo post</p>
                <div className="border-t-[0.1rem] border-red-600" />
                
                <section className="mt-4">
                    <div className="mb-4">
                        <p className="text-white mb-2">Titulo</p>
                        <input className="border-none outline-none rounded bg-slate-500 text-white placeholder-white p-1" placeholder='Lorem ipsum' />
                    </div>

                    <div className="mb-4">
                        <p className="text-white mb-2 ">Texto</p>
                        <textarea className="resize-none border-none outline-none w-96 h-60 rounded bg-slate-500 text-white placeholder-white p-1" placeholder='Lorem ipsum' />
                    </div>

                    <button className="text-white bg-slate-500 rounded px-6 py-2">Enviar</button>
                </section>
            </section>
        </div>
    )
}
