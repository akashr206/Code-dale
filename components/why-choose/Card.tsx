
const Card = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-2 min-[1200px]:w-[365px]">
            <div className="flex items-center gap-4">
                <div className="bg-zinc-800 text-primary rounded-md p-2.5">
                    {icon}
                </div>
                <h3 className="md:text-2xl text-lg font-semibold">{title}</h3>
            </div>
            <p className="text-zinc-700 font-medium pr-5">{description}</p>
        </div>
    );
};

export default Card;
