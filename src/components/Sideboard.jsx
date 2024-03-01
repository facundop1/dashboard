import React, { useState } from 'react';

export default function Sideboard() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleSideboard = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            {isVisible && (
                <div className="bg-slate-500 fixed h-full left-0 top-0 w-80 text-white">
                    <section className="flex p-4 gap-x-36">
                        <div className="flex">
                            <div className="bg-sideboard-pfp w-14 h-14 bg-cover" />
                            <div className="pl-4">
                                <p className="text-white">Admin</p>
                                <p className="text-green">● online</p>
                            </div>
                        </div>
                        <div className="bg-sideboard-cross w-3 h-3 bg-cover cursor-pointer" onClick={toggleSideboard} />
                    </section>

                    <div className="bg-slate-800 p-4">
                        <p className="text-white pb-2">Dashboard</p>
                        <div className="border-t-[0.1rem] border-red-600"></div>
                    </div>

                    <section className="bg-slate-800 px-4 pb-4 flex flex-col gap-2 h-full">
                        <p className="text-white">Crear nuevo post</p>
                        <p className="text-white">Editar post</p>
                        <p className="text-white">Eliminar post</p>
                    </section>
                </div>
            )}
        </>
    );
}
