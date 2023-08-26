import { countStar } from "../utils/startCount"
import { StartIcon } from "./StarIcon"



export const StarListIcon = ({ startNumber })=>{
   
    const starts = countStar( startNumber )
    
    return (
        <>
        {
            starts.map( start =>(
                <StartIcon key={ start } />
            ))
        }
        </>
    )
}