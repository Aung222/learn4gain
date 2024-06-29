import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import Image from "next/image";
import RegCard from "./card";

export default function Heading() {
  const text =
    "Unlock the doors to success through innovative  and personalized  learning";
  const keywords = ["innovative", "personalized"];

  return (
    <div className="my-20">
      <p className="text-3xl w-5/12 font-extrabold mx-auto text-center uppercase">
        {text.split(" ").map((word, index) =>
          keywords.includes(word) ? (
            <span key={index} className="text-red-500">
              {word}
            </span>
          ) : (
            word + " "
          )
        )}
      </p>
      <Image
        src="https://t3.ftcdn.net/jpg/01/82/66/70/360_F_182667007_XibG6q5EzMqFeJgMzy0MbWHgIyS8Wcju.jpg"
        alt=""
        className="mx-auto py-10"
        width={500}
        height={300}
      />
      <RegCard/>
    </div>
  );
}

export function SubHeading() {
  return (
    <div className="my-20">
      <p className="text-3xl text-red-500 font-extrabold text-center uppercase">
        New Student? Here's our guide
      </p>
    </div>
  );
}
