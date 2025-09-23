import {type Screen} from "../types"

type SuccessPageProps = {
    navAction: (scr: Screen) => void
}

const SuccessPage: React.FC<SuccessPageProps> = ({navAction}) => {
    return (
        <>
        <p>Success</p>
        <button onClick={() => navAction("title")}>Title</button>
        </>
    );
}

export default SuccessPage;