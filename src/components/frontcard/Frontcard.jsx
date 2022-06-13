
export const Frontcard = props => {

    return (
        <>
        <img src={props.image} alt={props.name}/>
        <h2>{props.name}</h2>
        <figcaption>{props.description}</figcaption>
        </>
    )
}