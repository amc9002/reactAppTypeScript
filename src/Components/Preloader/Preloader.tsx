import preloader from "../../Assets/Images/ZKZg.gif"

const Preloader = (props: {size: number}): JSX.Element => {
    return (
        <div>
            <img src={preloader} style={{ width: props.size }} />
        </div>
    )
}

export default Preloader