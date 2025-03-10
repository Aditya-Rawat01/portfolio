"use client"
import { useState } from "react";
import { SidebarIcon } from "../icons/sidebarIcon";
import { CancelIcon } from "../icons/cancelIcon";

export function Sidebar() {
    const [open,setOpen]=useState(false)
    console.log(open)
    return (
        <div className="">
            <p className="cursor-pointer" onClick={()=>setOpen((prev)=>!prev)}>
                {!open?<SidebarIcon/>:<CancelIcon/>}
            </p>
        </div>
    )
}