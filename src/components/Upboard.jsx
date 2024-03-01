import React from 'react'

export default function Upboard() {
    return (
        <div class="bg-gray-light    flex justify-between items-center p-[15px]">

            <div class="bg-upboard-menu w-10 h-10 bg-cover " />
            
            <div class="bg-logo w-10 h-10 bg-cover" /> 
        
            <section class="flex items-center gap-[40px]">

                <div class="flex">
                <div class="bg-sideboard-noti w-10 h-10 bg-cover" />
                <div class="bg-sideboard-correo w-10 h-10 bg-cover" />  
                </div>

                <div class= "flex items-center gap-[5px]">
                <div class="bg-sideboard-pfp w-10 h-10 bg-cover " />
                <p>Profile</p>
                </div>

            </section>
           
           
           
           
           

        </div>
    )
}
