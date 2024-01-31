import { useState } from "react"

const LoggedIn = ()=> {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    const handleLogIn = ()=>{
        setIsLoggedIn(true)
    }
    const handleLogOut = ()=>{
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <h2>User Is {isLoggedIn?"Logged In":"Logged Out"}</h2>
        </div>
    )
}

export default LoggedIn
