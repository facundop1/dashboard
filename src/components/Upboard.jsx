import React from 'react'

export default function Upboard() {
    return (
        <div class="bg-gray-light    flex justify-between items-center p-[20px]">

            <div class="bg-upboard-menu w-14 h-14 bg-cover " />
            
            <div class="bg-logo w-16 h-16 bg-cover" /> 
        
            <section class="flex items-center gap-[40px]">

                <div class="flex">
                <div class="bg-sideboard-noti w-14 h-14 bg-cover" />
                <div class="bg-sideboard-correo w-14 h-14 bg-cover" />  
                </div>

                <div class= "flex items-center gap-[5px]">
                <div class="bg-sideboard-pfp w-14 h-14 bg-cover " />
                <p>Profile</p>
                </div>

            </section>
           
           
           
           
           

        </div>
    )
}
