import { FaCheckCircle } from "react-icons/fa";
import {IconContext} from "react-icons";
export default function Title(){
return(
    <>
    <h2>Live Spaces</h2>
    <IconContext.Provider value={{ className:"myReact-icons"}}>
    <p className="color-para"><FaCheckCircle/>All NFTs Cyber either belong to or were minted by their space creator.</p>
    </IconContext.Provider>
    </>
    
)
}