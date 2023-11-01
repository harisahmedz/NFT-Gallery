import React from 'react'
import './Gallery.css'

const Filter = ({ TabsData }) => {
    return (
        <>
            <div className='flex flex-col lg:w-1/4  md:min-w-[240px] lg:min-w-[280px] relative'>
                <div className=' lg:block relative z-10 flex  justify-between h-12  border-b border-opacity-10 border-white'>
                    <h1 className=' text-xl uppercase font-extrabold tracking-tight goldentext'>Filter</h1>
                </div>


                <div className='overflow-y-auto pb-3  lg:px-0 pt-3 max-h-auto lg:max-h-[calc(100vh-6.5rem)] tabs-main'>

                    <form className='flex  w-full pb-2 lg:pb-3 focus:border-red-300 focus-within:border-b-black border-b relative border-opacity-10  items-center border-white'>
                        <img alt="" src="https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2FSearch.png&w=64&q=75"   className="lg:w-7 lg:h-7 h-5 w-5  mr-2 "></img>
                        <input placeholder="Sort by serial..." id="searchbyid" type="text" className="h-full text-[12px] lg:text-sm w-full z-10 focus:outline-none active:outline-none border-0 border-none bg-transparent text-white" />
                    </form>


                    {
                        TabsData.map((item) => (
                            <details className="border-b border-opacity-10  z-10 py-0 border-white opacity-100">
                                <summary className="w-full py-2 lg:py-3 flex items-center justify-between text-sm hover:opacity-80  after:content-plus">
                                    <span className="font-600 flex items-center relative text-[11px] lg:text-xs uppercase ">
                                        <img alt="" src={item.icon}  className="lg:w-7 lg:h-7 h-5 w-5 mr-2" />
                                        {item.label}
                                    </span>
                                </summary>
                                
                                <div className="pt-0 pb-4 lg:max-h-80 galleryscroll lg:overflow-y-auto pr-2">
                                    <input class="w-full bg-transparent duration-300 text-sm p-2 mb-2 lg:w-search border focus:outline-none   border-opacity-20 focus:border-opacity-40" placeholder="Search..." type="text" value=""/>
                                    <div className="space-y-0">
                                        <div className="flex px-2 items-center galleryinput">
                                        <input id="filter-Type-0" name="Type[]" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" value="Human"/>
                                        <label for="filter-Type-0" class="ml-2 uppercase font-mono text-xs pt-2 pb-1.5 opacity-80 w-full cursor-pointer h-full"> Human <span class="opacity-50">(9018)</span></label>
                                        </div>
                                    </div>
                                </div>

                               
                            </details>
                        ))
                    }





                </div>

            </div>





        </>




    )
}

export default Filter