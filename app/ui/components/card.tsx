import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import CountdownItem from "./countdown-item";
import { title } from "process";

export default function RegCard() {

    return (
        <Card className="mx-auto w-1/3">
            <CardHeader className="flex flex-col text-left">
                <p className="text-2xl text-blue-500 font-bold ">Registration Countdown</p>
                <p className="text-sm text-gray-500">Getting Ready to Register before expires</p>
            </CardHeader>
            <CardBody>
                <div className="flex justify-evenly">
                    <CountdownItem value={3} label="Days" />
                    <CountdownItem value={10} label="Hours" />
                    <CountdownItem value={33} label="Minutes"/>
                </div>
            </CardBody>
            <CardFooter>
                <Button color="primary" className="mx-auto">Register Now</Button>
            </CardFooter>
        </Card>
    );
}

export function MainCard(){

    const cardlists = [
        {
            title:"Easy to Learn",
            img:"https://cdn.pixabay.com/photo/2017/03/23/17/41/wing-chair-2168970_1280.png",
            alt:"easy to learn",
            description:"Lorem ipsum dolor sit amet. Aut nemo pariatur sed rerum molestiae id perferendis ipsum qui sunt autem. Qui maiores mollitia sit pariatur odit ut galisum autem ea eius nisi quo unde eius et magnam quod. Id beatae molestias ut veniam sint qui voluptatum voluptatem in animi quis et voluptatem aliquid ut voluptas quisquam et blanditiis dolores.",
        },
        {
            title:"Daily Lessons",
            img:"https://cdn.pixabay.com/photo/2017/10/03/20/31/book-2814035_1280.jpg",
            alt:"daily lessons",
            description:"Lorem ipsum dolor sit amet. Et quasi iste ex dolores veritatis ut corrupti modi aut sequi suscipit aut quos earum aut reprehenderit unde et cumque eligendi. Non suscipit nobis eos dolorum sequi ad quaerat unde!",
        },
        {
            title:"Revise & Accuracy",
            img:"https://cdn.pixabay.com/photo/2023/12/15/17/04/ai-generated-8451019_1280.png",
            alt:"revise and accuracy",
            description:"Lorem ipsum dolor sit amet. Rem quasi ratione qui optio sint est nulla consequatur nam nemo incidunt ea voluptatem quia. Et voluptas delectus 33 beatae tempora et dicta dolorem ab autem natus qui quam quas.",
        },
        {
            title:"Free Tests",
            img:"https://cdn.pixabay.com/photo/2013/07/12/15/19/graduation-149646_640.png",
            alt:"tests",
            description:"Lorem ipsum dolor sit amet. A sapiente maxime et rerum galisum ut laboriosam nihil. Qui voluptatum voluptas et consequatur ratione aut perspiciatis sunt est libero debitis est omnis atque eum maxime quia est distinctio soluta.",
        }
    ]


    return(
        <div className="grid grid-cols-2 gap-10 w-3/4 mx-auto">
            {cardlists.map((card) => (
                <Card key={card.title}>
                    <CardHeader className="p-8">
                        <img src={card.img} alt={card.alt} />
                    </CardHeader>
                    <CardBody className="p-8">
                        <p className="text-2xl text-blue-500 font-bold">{card.title}</p>
                        <p>{card.description}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

