import React from 'react'
import { useState } from 'react';

const Navbar = () => {


    return (
        <div className='bg-sky-950 h-15  flex justify-around text-teal-50 items-center'>

            <div className='flex gap-0.5'>
                
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                    src="https://cdn.lordicon.com/fgxwhgfp.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#ffffff"
                >
                </lord-icon>
            </div>

            <ul className='text-amber-50 flex gap-5 justify-center'>

                <li><a >Home</a> </li>
                <li><a >About</a></li>
                <li><a href="https://github.com/samanvayavats">Github</a></li>
            </ul>

        </div>
    )
}

export default Navbar
