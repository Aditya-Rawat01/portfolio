"use client"
import { useState } from "react";
import { SidebarIcon } from "../icons/sidebarIcon";
import { CancelIcon } from "../icons/cancelIcon";

export function Sidebar() {
    const [open,setOpen]=useState(false)
    
    return (
        <div className="relative">
            <p className="cursor-pointer relative z-10 sm:hidden" onClick={()=>setOpen((prev)=>!prev)}>
                {!open?<SidebarIcon/>:<CancelIcon/>}
            </p>
            <div className={`fixed ${open?"left-0":"-left-[110%]"} transition-all duration-1000 top-0 w-full bg-gray-500 h-screen rounded-2xl`}>

            </div>
        </div>
    )
}