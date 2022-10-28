import GetInTouch from "../components/infoContent/getInTouch/GetInTouch";
import Shipping from "../components/infoContent/Shipping";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed";
import InfoHeader from "../components/layout/headers/InfoHeader";

const Info = () => {
    return (
        <>
            <InfoHeader />
            <main className='w-full overflow-hidden flex flex-col'>
                <Shipping />
                <GetInTouch />
                <InstagramFeed />
            </main>
        </>
    );
};

export default Info;