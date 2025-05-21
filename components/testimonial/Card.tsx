import { Star } from "lucide-react";
import Image from "next/image";

const Card = ({
    title,
    message,
    author,
    location,
    review,
    image,
}: Readonly<{
    title: string;
    message: string;
    author: string;
    location: string;
    review: string;
    image: string;
}>) => {
    return (
        <div className="w-[370px] ml-4 rounded-lg p-[10px] h-[370px] bg-[rgb(240_241_232)] flex flex-col justify-between">
            <div className="flex justify-between p-[10px]">
                <div className="flex gap-1 items-center ">
                    <Star className="text-amber-600 fill-amber-600 w-4"></Star>
                    <Star className="text-amber-600 fill-amber-600 w-4"></Star>
                    <Star className="text-amber-600 fill-amber-600 w-4"></Star>
                    <Star className="text-amber-600 fill-amber-600 w-4"></Star>
                    <Star className="text-amber-600 fill-amber-600 w-4"></Star>
                </div>
                <p className="text-xs font-semibold tracking-tight text-[rgb(25_28_27)]">
                    {review}
                </p>
            </div>
            <div className="p-[10px]">
                <h2 className="text-[20px] font-semibold">{title}</h2>
                <p className="text-[rgb(25_28_27)]">{message}</p>
            </div>
            <div className="p-[10px] flex gap-4 items-center">
                <div className="w-14 bg-amber-200/40 flex itemse-center justify-center rounded-lg h-14 p-1">
                    <Image
                        src={image}
                        width={44}
                        height={44}
                        alt="user"
                        className="w-11 h-auto object-cover rounded-md object-center"
                    ></Image>
                </div>
                <div>
                    <h3 className="text-[20px] font-semibold"> {author}</h3>
                    <p className="text-sm text-[rgb(25_28_27)]">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
