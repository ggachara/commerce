export default function Home() {
  return (
    <div className="border-2 border-black-600 container mx-auto px-1 h-screen flex flex-column box-border">
      <div className="border-2 border-black-600 container w-32 bg-gray-800">
        {" "}
        <h2 className="text-white border border-black-200 py-4 pl-2">
          {" "}
          Sidebar Main
        </h2>
        <ul className="pt-12 space-y-3 text-white">
          <li className="border border-black-200 pl-2 py-4">Home</li>
          <li className="border border-black-200 pl-2 py-4">Settings</li>
          <li className="border border-black-200 pl-2 py-4">Capture</li>
          <li className="border border-black-200 pl-2 py-4">Search</li>
        </ul>
      </div>
      <div className="container flex flex-col">
        <div className="p-1 space-y-1 bg-gray-600">
          <div className="border-2 border-black-600 mx-auto px-1 h-12 text-center">
            {" "}
            Navbar Main
          </div>
        </div>
        <div className="p-1 flex flex-row h-screen space-x-1 bg-gray-400">
          <div className="border-2 border-black-600 container mx-auto px-1 my-1">
            {" "}
            Sidebar Mini
          </div>
          <div className="border-2 border-black-600 container mx-auto px-1 my-1">
            {" "}
            Main Body
          </div>
        </div>
      </div>
    </div>
  );
}
