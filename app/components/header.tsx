import { GithubIcon } from "../icons/githubIcon";
import { LinkedinIcon } from "../icons/linkedinIcon";
import { TwitterIcon } from "../icons/twitterIcon";
import { Sidebar } from "./sidebar";

export function Header() {
    return (
        <div className="w-[99%] h-16 bg-white shadow-[inset_0px_-18px_24px_-15px_rgba(249,_115,_22,_0.5)] backdrop-blur-lg fixed top-4 text-black rounded-full flex items-center justify-between">
            <Sidebar/>
            <p className="text-2xl">portfolio</p>
            <div className=" gap-3 mr-4 hidden sm:flex">
            <p className="cursor-pointer"><GithubIcon/></p>
            <p className="cursor-pointer"><TwitterIcon/></p>
            <p className="cursor-pointer"><LinkedinIcon/></p>    
            </div>
            

        </div>
    )
}