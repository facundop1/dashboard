
import React, { useState } from 'react';
import Sideboard from './Sideboard'; 

export default function Upboard() {
    const [sideboardVisible, setSideboardVisible] = useState(false);

    const toggleSideboard = () => {
        setSideboardVisible(!sideboardVisible);
    };

    return (
        <div className="bg-gray-light flex justify-between items-center p-[13px]">
            <div className="bg-upboard-menu w-14 h-14 bg-cover" onClick={toggleSideboard} />
            <div className="bg-logo w-16 h-16 bg-cover" />
            <section className="flex items-center gap-[40px]">
                <div className="flex">
                    <div className="bg-sideboard-noti w-14 h-14 bg-cover" />
                    <div className="bg-sideboard-correo w-14 h-14 bg-cover" />
                </div>
                <div className="flex items-center gap-[5px]">
                    <div className="bg-sideboard-pfp w-14 h-14 bg-cover" />
                    <p>Profile</p>
                </div>
            </section>
            {sideboardVisible && <Sideboard />}
        </div>
    );
}
