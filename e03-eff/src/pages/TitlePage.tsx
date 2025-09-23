import {type Screen} from "../types"

type TitlePageProps = {
    navAction: (scr: Screen) => void
}

const TitlePage: React.FC<TitlePageProps> = ({navAction}) => {
    return (
        <>
        <p>Title</p>
        <button onClick={() => navAction("code")}>Code</button>
        </>  
    );
}

export default TitlePage;