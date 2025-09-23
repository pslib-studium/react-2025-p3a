import {type Screen} from "../types"

type CodePageProps = {
    navAction: (scr: Screen) => void
}

const Page: React.FC<CodePageProps> = ({navAction}) => {
    return (
        <>
        <p>Code</p>
        <button onClick={() => navAction("success")}>Go</button>
        </>
    );
}

export default Page;