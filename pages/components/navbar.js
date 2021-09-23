import React from 'react'
import { Menu } from '@headlessui/react'

export default function Navbar() {
    return (
        <>
        <div className="p-1 space-y-1 bg-gray-500 flex space-between">
          
        <div className="mx-auto px-1 h-16 text-center relative">
            <h2>Navbar Main</h2>
        </div>

        <div className="w-auto mr-3">
         <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items className="flex flex-col w-auto space-y-1 border-2 border-gray-300">
            <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
            </Menu.Item>
            <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
            </Menu.Item>
            <Menu.Item disabled>
                <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
            </Menu.Items>
         </Menu>
        </div>
        </div>
     </>
    )
}
