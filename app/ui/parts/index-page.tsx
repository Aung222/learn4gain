import { MainCard } from "../components/card";
import Logo from "../components/logo";
import Heading, { SubHeading } from "../components/text";

export default function IndexPage() {
    return (
        <div className="px-8 py-4">
            <Logo/>
            <Heading/>
            <SubHeading/>
            <MainCard/>
        </div>
    );
}