import { useContext, useRef, useState } from "react"
import Btn from "./Btn";
import { ThemeContext } from "./Context";

function ComponentWithFunction()
{
    const [name,setName]=useState("Demo")
    const logo=useRef(null);
    const theme=useContext(ThemeContext)

    const changeImage=()=>{
        logo.current.style.transform="rotate(25deg)";
    }
    return(
        <div className="App" style={{background:theme.background,color:theme.color}}>
            <h1>Function Based Component : {name}</h1>
            <img src="logo192.png" onClick={changeImage} ref={logo} alt="logo"/>
            <br/><br/>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <Btn/>
        </div>
    )
}
export default ComponentWithFunction;