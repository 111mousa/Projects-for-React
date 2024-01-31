type Props = {
    arrData:{
        firstName:string,
        lastName:string
    }[]
}

type itemType = {
    firstName:string,
    lastName:string
}

function SayHello(props:Props) {
    
    return (
        <div>
            <ul>
                {props.arrData.map((item:itemType)=>(<li key={item.firstName}>{item.firstName} , {item.lastName}</li>))}
            </ul>
        </div>
    )
}

export default SayHello