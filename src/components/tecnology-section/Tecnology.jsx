
import { use, useState } from "react";

import TechnologyCard from "./TechnologyCard";

const Tecnology = ({technologyPromise}) => {

    console.log(technologyPromise);

    const technologies = use(technologyPromise)

    const [selectedStack , setSelectedStack ] = useState([])

    const handleAddToStack = (item) => {
        setSelectedStack(prevStack => [...prevStack, item])
    }

    const handleRemoveFromStack = (id) => {
        setSelectedStack(prevStack => prevStack.filter(item => item.id !== id))
    }

    const handleRemoveAll = () => {
        setSelectedStack([]);
    }

    return (

        <>
            <div className="flex justify-between gap-5">

                <div className="container mx-auto grid grid-cols-3 gap-10">

                    {
                        technologies.map(technology => {
                            return(
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    handleAddToStack={handleAddToStack}
                                />
                            )
                        })
                    }

                </div>

                <div className="card bg-base-100 w-96 shadow-sm self-start">

                    <div className="card-body">

                        <h2 className="card-title font-bold text-2xl text-[#0F172A] my-3">
                            Your Stack
                        </h2>

                        <p className="text-[#64748B] text-[18px] mb-3">
                            {selectedStack.length} Technology Selected
                        </p>

                        <div className="flex flex-col gap-3">

                            {
                                selectedStack.map(item => {
                                    return(

                                        <div
                                            key={item.id}
                                            className="border-2 border-[#E2E8F0] rounded-2xl p-4 flex items-center justify-between gap-4"
                                        >

                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="w-12 h-12"
                                            />

                                            <div>
                                                <h3 className="font-bold text-xl">
                                                    {item.name}
                                                </h3>

                                                <p className="text-[#94A3B8]">
                                                    {item.category}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => handleRemoveFromStack(item.id)}
                                                className="btn btn-ghost text-2xl"
                                            >
                                                ✕
                                            </button>

                                        </div>

                                    )
                                })
                            }

                        </div>

                        <button
                            onClick={handleRemoveAll}
                            className="btn  mt-4"
                        >
                            Remove All
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Tecnology;