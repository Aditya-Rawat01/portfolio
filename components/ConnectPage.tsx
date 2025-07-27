export default function ConnectPage() {
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
    <div className="w-full h-screen bg-red-400 flex flex-col items-center justify-center">
      <p className="font-port-sans text-6xl mt-12">Say Hi</p>
    </div>
  );
}
