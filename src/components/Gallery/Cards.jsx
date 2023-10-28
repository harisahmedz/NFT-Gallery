import React from 'react'
import CardInfo from './CardInfo';

const Cards = ({ data }) => {
    const [modal, setModal] = React.useState({status:false, item:null});
    const modalCloseHandler=()=>{
        console.log("CloseModal")
        setModal({status:false, item:null})
    }
    return (
        <>
            <div className='grid lg:grid-cols-4  2xl:grid-cols-5 grid-cols-2 lg:gap-x-6 gap-x-4 lg:gap-y-2 gap-y-1 lg:col-span-3'>
                {
                    data.content.map((item) => (
                        <div className="cursor-pointer  fade-in text-sm lg:-20  duration-300" onClick={()=>(setModal({status:true,item:item}))}>
                            <div className='w-full fade-in lg:group-hover:scale-[1.01] group-hover:shadow-me duration-300 rounded-xl square aspect-w-1 aspect-h-1 overflow-hidden bg-gray-100 shadow-me'>
                                <img alt="" sizes="(max-width: 1024px) 100vw, 400px" src={item.image} class=" duration-300 w-full h-full object-center object-cover" />
                            </div>
                            <h4 style={{color:"rgba(255,255,255,0.5)"}} className=' mt-1  uppercase text-[10px] text-center'>{data.label}</h4>
                            <h3 className="goldentext font-600  pb-2 -mt-1 text-xs tracking-wider text-center uppercase">{item.s_no}</h3>
                        </div>
                    ))
                    
                }
            </div>
            {modal.status && <CardInfo  onHide={modalCloseHandler} data={modal.item}/>}
        </>
    )
}

export default Cards