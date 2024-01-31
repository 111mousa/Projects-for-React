// import Input from "./Input"
// import { useState } from "react"

type ButtonProps = {
    handleClick : (event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

const Button = ({handleClick}:ButtonProps) => {
    
    return (
        <div>
            return <button onClick={(event)=>handleClick(event,1)}>Click</button>
        </div>
    )
}

export default Button
