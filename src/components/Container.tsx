type ContainerProps = {
    styles : React.CSSProperties
}

const Container = (props:ContainerProps)=> {
    return (
        <div style={props.styles}>
            Text Here
        </div>
    )
}

export default Container