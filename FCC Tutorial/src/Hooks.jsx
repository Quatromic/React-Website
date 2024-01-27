import { useState,useEffect } from "react"

const Hooks = () => {
    const [windowWidth,setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize",() => setWidth(window.innerWidth))
        window.removeEventListener("resize",() => setWidth(window.innerWidth))
    },[])
    return(
        <p>{windowWidth} px</p>
    )
}
export default Hooks