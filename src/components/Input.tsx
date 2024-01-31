type InputProps = {
    handleChange : (event:React.ChangeEvent<HTMLInputElement>) => void
    value : string
}

const Input = ({value,handleChange}:InputProps) => {
    return (
        <input type="text" value={value} onChange={handleChange}/>
    )
}

export default Input
