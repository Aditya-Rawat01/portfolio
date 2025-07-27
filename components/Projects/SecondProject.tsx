export default function SecondProject() {
  return (
    <div className="w-full h-fit">
      <MobileVersion />
      <PCVersion />
    </div>
  );
}

function MobileVersion() {
  return <div className="w-full h-full sm:hidden"></div>;
}

function PCVersion() {
  return (
    <div className="w-full h-screen bg-red-400 flex flex-col items-center">
      <p className="font-port-sans text-6xl mt-12">Project 2</p>
    </div>
  );
}
