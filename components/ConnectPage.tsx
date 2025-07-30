import GithubIcon from "./svgs/githubIcon";
import LinkedInIcon from "./svgs/linkedInIcon";
import TwitterIcon from "./svgs/twitterIcon";

export default function ConnectPage() {
  return (
    <div className="w-full h-fit">
      <CommonVersion/>
    </div>
  );
}
function CommonVersion() {
  return (
    <div className="w-full h-screen bg-black text-white flex-col items-center justify-center flex">
      <h3 className="font-port-sans text-4xl xl:text-6xl  custom:text-8xl mt-12">Say Hi👋</h3>
      <div className="flex gap-4 h-32 items-center  custom:hidden">
        <a href="https://github.com/Aditya-Rawat01"><GithubIcon size={50}/></a>
        <a href="https://www.linkedin.com/in/aditya-rawat-qwerty/"><LinkedInIcon size={50}/></a>
        <a href="https://x.com/adityarawat240"><TwitterIcon size={50}/></a>
      </div>
      <div className="gap-4 h-32 items-center hidden custom:flex">
        <a href="https://github.com/Aditya-Rawat01"><GithubIcon size={100}/></a>
        <a href="https://www.linkedin.com/in/aditya-rawat-qwerty/"><LinkedInIcon size={100}/></a>
        <a href="https://x.com/adityarawat240"><TwitterIcon size={100}/></a>
      </div>
    </div>
  );
}
