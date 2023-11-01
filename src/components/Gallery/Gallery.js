import React from 'react'
import Cards from './Cards'
import Filter from './Filter'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";


const FilterTabs = [
    { label: "icon", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "Special", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FSpecial.png&w=64&q=75" },
    { label: "Clothing", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FClothing.png&w=64&q=75" },
    { label: "OffHand", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FOffhand.png&w=64&q=75" },
    { label: "Hair", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FHair.png&w=64&q=75" },
    { label: "HeadGear", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "Face", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FHeadgear.png&w=64&q=75" },
    { label: "neck", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "eyes", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "mouth", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "ear", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "background", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
]
const tabsData = [
    {
        label: 'AZUKI',
        content: [
            {
                image: "https://azk.imgix.net/images/ac073d60-7f28-496d-9ca5-b97acdc63d03.png?w=1024",
                type: "RED",
                bgColor: "rgb(187, 189, 183)",
                s_no: "No.1256",
                ear: "spiked ring",
                CLOTHING: "CAMO HOODIE",
                MOUTH: "LONG DREADLOCKS",
                HAIR: "LONG DREADLOCKS",
                NECK: "ZEN HEADPHONES",
                EYES: "RELAXED",
                OFFHAND: "GOLDEN FLOORSWEEPER",
                BACKGROUND: "OFF WHITE D",
                accquiredDate: "Jan 2022",
                address: "0X8FFA85A0C59CF2396...20276E1"
            },
            {
                image: "https://azk.imgix.net/images/e3e19f5c-3ed0-4dc1-a415-6c76a6de14ef.png?w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/87650f4f-5d47-4e56-a1dc-37b7dfcee88c.png?w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/fc41b4b6-22b9-4a38-9d32-80e4842bb568.png?w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/973a6f0d-46a8-42c8-8879-c9fba996ec76.png?w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/e3e19f5c-3ed0-4dc1-a415-6c76a6de14ef.png?w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/87650f4f-5d47-4e56-a1dc-37b7dfcee88c.png?w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/fc41b4b6-22b9-4a38-9d32-80e4842bb568.png?w=1024",
                type: "RED",
                s_no: "No.1256"
            },


        ]
    },
    {
        label: 'BEANZ',
        content: [
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },
            {
                image: "https://azk.imgix.net/images/8c5cf8d9-706d-4c26-9d3e-af4fd2854027.png?fm=jpg&w=1024",
                type: "RED",
                s_no: "No.1256"
            },

        ]
    },
]

const Gallery = () => {
    const [activeTabIndex, setActiveTabIndex] = React.useState(0);
    const [offCanvas, setOffCanvas] = React.useState(false);
    const offCanvasFilter = (
        <div className='md:hidden'>

            <OffCanvas
                width={300}
                transitionDuration={300}
                effect={"parallax"}
                isMenuOpened={offCanvas}
                position={"right"}
            >
                <OffCanvasBody className="bg-black z-50"
                >

                </OffCanvasBody>
                <OffCanvasMenu >
                    <div className="bg-black px-3 py-2 pt-4 min-h-[100vh] overflow-y-auto z-50" style={{ zIndex: 900 }}>
                        <Filter TabsData={FilterTabs} />
                        <button class="absolute z-50 block top-4 right-4 text-white" onClick={()=>(setOffCanvas(false))}>
                            <svg class="fill-current w-6 h-6" viewBow="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </OffCanvasMenu>
            </OffCanvas>
        </div>

    )
    return (
        <>
            
            <div className='mt-2 pt-4  px-[3%] pb-[4%] flex flex-col md:flex-row gap-x-3 w-full'>
                <div className='hidden md:block'><Filter TabsData={FilterTabs} /></div>
                <div className="lg:px-8 w-full">
                    <div className="lg:bg-transparent left-0 md:px-4 pt-26 lg:pt-0 duration-300 lg:px-0 w-full lg:relative z-20 flex items-end justify-between h-12  lg:pb-4 pb-3 border-b border-opacity-10 border-white ">

                        <div className="flex p-1.5 space-x-1 duration-300 bg-[#101010] lg:rounded-xl rounded">
                            {tabsData.map((tab, idx) => {
                                return (

                                    <button key={idx} className={`w-full lg:pb-1 lg:pt-1 sm:py-1 px-4 lg:text-lg text-xs leading-5 font-extrabold  lg:rounded-lg rounded-sm focus:outline-none hover:bg-white/[0.5] duration-300  ${idx === activeTabIndex && "bg-[#404040]"}`} onClick={() => setActiveTabIndex(idx)}>
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex items-center pb-0">
                            <h1 style={{ color: "rgba(255,255,255,0.5)" }} className=" lg:text-3xl text-lg uppercase font-extralight mr-4 font-200 inline-block  text-white">
                                1000
                            </h1>
                            <button className="flex hover:opacity-60 duration-300 py-1 px-2 lg:py-2 lg:px-4 rounded mr-4 lg:mr-2 bg-[#404040]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4 md:w-5 md:h-5"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>

                            </button>
                        </div>


                    </div>
                    
                    <div className="md:hidden mt-3 mb-4" style={{ zIndex: 10 }} onClick={() => (setOffCanvas(!offCanvas))}>
                        <h3 class="text-xs  flex pr-2 items-center font-semibold uppercase tracking-wide opacity-50">
                            Filters<span class="h-5 w-5 ml-2 text-4xs flex items-center justify-center rounded bg-gray-200 text-black"><i class="fa-solid fa-bars-staggered"></i></span></h3>
                    </div>
                    {offCanvas && (offCanvasFilter)}
                    {/* <Cards/> */}
                    <div className='lg:mt-4 mt-2'>
                        <Cards data={tabsData[activeTabIndex]} />
                    </div>
                </div>

            </div>
        </>

    )
}

export default Gallery