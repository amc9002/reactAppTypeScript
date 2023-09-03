import preloader from "../../Assets/Images/ZKZg.gif"
import { PreloaderPropsType } from "../../types"

const Preloader = (props: PreloaderPropsType): JSX.Element => {
    return (
        <div>
            <img src={preloader} style={{ width: props.size }} />
        </div>
    )
}

export default Preloader