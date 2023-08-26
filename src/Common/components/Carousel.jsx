import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

export const Carousel  = ()=>{

    const [ activePhoto, setActivePhoto ] = useState(1)

    const onNext = ()=>{
        if( activePhoto === 4 ) return setActivePhoto(1)
        const after = activePhoto + 1
        setActivePhoto( after )
    }

    const onBack = ()=>{
        if( activePhoto === 1) return setActivePhoto(4)
        const before = activePhoto - 1
        setActivePhoto( before )
        
    }

    // setTimeout(()=>{
    //     onNext()
    // },4000)

    return(
        <div className="flex w-[85%] flex-row h-96 mt-2 justify-center self-center ">
         
                <ChevronLeftIcon onClick={onBack} className="w-10 h-full cursor-pointer"/>
              
                <div className="flex flex-row w-full overflow-hidden ">
                <img src="/assets/camisa_1.jpg" className={`${activePhoto === 1 ? 'w-[600px] h-96 flex flex-grow ': 'ml-[-31%]'}` }/>
                <img src="/assets/pc_1.jpg" className={`${activePhoto === 2 ? 'w-[600px] h-96 flex flex-grow ': ''}`} />
                <img src="/assets/camisa_1.jpg" className="w-0 h-96  hidden" />
                <img src="/assets/pc_2.jpg" className="w-0 h-96 hidden" />
               
                </div>
               <ChevronRightIcon onClick={onNext} className="w-10 h-full cursor-pointer"/>
        </div>
        
    )
}