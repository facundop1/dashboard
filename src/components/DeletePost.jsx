import React from 'react'

export default function DeletePost() {
  return (
    <div className="p-4">
            <section className="bg-slate-800 p-4 rounded">
                <p className="text-white mb-2">Eliminar Post</p>
                <div className="border-t-[0.1rem] border-red-600" />
                
                <ul className="grid grid-cols-4  justify-center line text-white p-4 align-center ">
                    
                    <li>ID</li>
                    <li>Titulo</li>
                    <li>Fecha de carga</li>
                    <li className='bg-deletepost-trash w-4  h-4 bg-cover'></li>
                   
                </ul> 

                  
            </section>
        </div>
  )
}

