import { SVG39, SVG40 } from "@/svg/SVG"
import Cards from "@/components/Cards"
import { ObjectInterface } from "@/data/object";
import { useState } from "react"



const RelatedProducts = ({ obj }: { obj: ObjectInterface }) => {
    const [next, setNext] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleButtonClick = (next: boolean) => {
        setIsTransitioning(true);

        setTimeout(() => {
            setIsTransitioning(false);
            setNext(next);
        }, 100);
    };

    return (
        <div className="cont-y container-p">
            <div className="flex flex-row justify-between items-center flex-wrap md:justify-center md:flex-col gap-4">
                <h1 className="title-22-30 text-dark">RELATED PRODUCTS</h1>
                <div className="flex flex-row items-center justify-center gap-8">
                    <button onClick={() => handleButtonClick(true)}>
                        <SVG39 color={next ? "#7f7f7f" : "#121212"} />
                    </button>
                    <button onClick={() => handleButtonClick(false)}>
                        <SVG40 color={!next ? "#7f7f7f" : "#121212"} />
                    </button>
                </div>
            </div>
            <div className={`transition-all duration-100 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                {next ? (
                    <Cards categ={obj.category} limit={4} spec={obj.specification[0]} />
                ) : (
                    <Cards categ={obj.category} limit={8} startIndex={4} spec={obj.specification[0]} />
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;