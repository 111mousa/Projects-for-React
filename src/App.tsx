import './App.css'
import LoggedIn from './components/LoggedIn'
import User from './components/User'
// import Products from './components/Products'
// import Container from './components/Container'
// import Button from './components/Button'
// import Input from './components/Input'
// import Status from './components/Status'
// import { useState } from 'react'
// import SayHello from './components/sayHello'


function App() {
//   const productsData = [
//     {
//         id:1,
//         name:"Product1",
//         price:12,
//         desc:"this is product1"
//     },
//     {
//         id:2,
//         name:"Product2",
//         price:12,
//         desc:"this is product2"
//     },
//     {
//         id:3,
//         name:"Product3",
//         price:12,
//         desc:"this is product3"
//     }
// ]
//   const arrData = [
//     {
//         firstName:"Ahmed",
//         lastName:"Omar"
//     },
//     {
//         firstName:"Samer",
//         lastName:"Sanad"
//     },
//     {
//         firstName:"Hasan",
//         lastName:"Ali"
//     }
// ]
// const [value,setValue] = useState("")
//     function handleChange(event){
//         setValue(event.target.value)
//         console.log(event.target.value)
//     }

  return (
    <div>
      {/* <Status  status="loading"/> */}
      {/* <SayHello arrData={arrData}/> */}
      {/* <Button handleClick={(e,id)=>console.log(e.target,id)} /> */}
      {/* <Input value={value} handleChange={(event)=>handleChange(event)}/> */}
      {/* <Container styles={{border:"1px solid red",padding:"2rem",borderRadius:"5px"}} /> */}
      {/* <Products productsData={productsData} /> */}
      {/* <LoggedIn /> */}
      <User/>
    </div>
  )
}

export default App
