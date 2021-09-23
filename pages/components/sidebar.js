import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <>
         <div className="w-48 bg-gray-400 pl-2">
        {" "}
        <h1 className="text-white py-4 px-2 brightness-0">
          {" "}
          Sidebar Main
        </h1>
        <ul className="space-y-3 text-white">
          <li className="pl-2 py-4"> <Link href="./home">Home</Link></li>
          <li className="pl-2 py-4"> <Link href="./settings">Settings</Link></li>
          <li className="pl-2 py-4"><Link href="./capture">Capture</Link></li>
          <li className="pl-2 py-4"><Link href="./search">Search</Link></li>
          <li className="pl-2 py-4"><Link href="./another">Another</Link></li>
        </ul>
      </div>
        </>
    )
}
