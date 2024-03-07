import React from 'react'

export default function Logo() {
    return (
        <div className='flex place-content-center '>
            <section className='bg-slate-800 flex justify-center flex-col rounded p-4'>
                <div className='flex justify-center'>
                    <div className='bg-logo h-20 w-20 bg-cover' />
                </div>

                <div className='flex flex-row items-center gap-2 mb-2'>
                    <div className='bg-login-user w-4 h-4 bg-cover' />
                    <input className='border-b-2 border-white outline-none bg-slate-800 placeholder-white text-white' placeholder='Usuario' />
                </div>

                <div className='flex flex-row items-center gap-2 mb-2'>
                    <div className='bg-login-password w-4 h-4 bg-cover' />
                    <input className='border-b-2 border-white outline-none bg-slate-800 placeholder-white text-white' placeholder='Contraseña' type='password' />
                </div>

                <div className='flex flex-row items-center gap-2 mb-2'>
                    <input className='' type='checkbox' />
                    <p className='text-white'>Recordar usuario</p>
                </div>

                <button className='text-white bg-slate-500 rounded px-6 py-2'>Iniciar sesión</button>
            </section>
        </div>
    )
}
