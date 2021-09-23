import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Footer from './footer'


export default function Layout({ children }) {
    return (
        <>
        <div className="border-2 border-red-600 container flex flex-row box-border">
            <Sidebar className="fixed"/>
            <div className="container flex flex-col h-screen">
                <Navbar />
                <main className="border-2 border-gray-600 w-full">{ children }</main>
                <Footer/>
            </div>
        </div>
        </>
    )
}
