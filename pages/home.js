import React from 'react'
import { Tab, Menu } from "@headlessui/react";
import Layout from './components/layout'

export default function Home() {
    return (
        <Layout>
        <div className="p-1 flex flex-row h-auto space-x-1">
          {/* Mini-Sidebar One */}
          <div className="border-2 border-black-600 container mx-auto px-1 my-1 w-1/4">
            <h2 className="text-center mb-2">Sidebar Mini</h2>
            <Tab.Group>
              <Tab.List className="mx-2 pl-4 space-x-12 border border-black-400 mb-2">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
              </Tab.List>
              <Tab.Panels className="mx-2 pl-4 space-x-12 border border-black-400 h-fit">
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Main body Here!! */}
          <div className="border-2 border-black-600 container mx-auto px-1 my-1 w-3/4">
            {" "}
            Main Body
          </div>
        </div>
        </Layout>
    )
}
