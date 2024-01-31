import { useState } from "react"
import { User } from "../types/app"


const User = ()=> {
    const [user,setUser] = useState<User>({} as User)
    return (
        <div>
            <button onClick={()=>setUser({name:"mousa",email:"mousa@123.com"})}>Login</button>
            <button onClick={()=>setUser({} as User)}>Logout</button>
            <h2>Usre Name Is : {user.name||"There Is No User"}</h2>
            <h2>Usre Name Is : {user.email||"There Is No User"}</h2>
        </div>
    )
}

export default User
