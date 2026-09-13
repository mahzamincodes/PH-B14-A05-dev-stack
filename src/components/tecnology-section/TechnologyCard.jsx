
import { useState } from 'react';
import { CiStar } from 'react-icons/ci';

const TechnologyCard = ({technology , handleAddToStack}) => {

    const [isAdded, setIsAdded] = useState(false)
    // console.log(isAdded, setIsAdded);

    // const handleClick = () =>{
    //     setIsAdded()
    // }

    return (
        <div className=" card bg-base-100 w-96 shadow-sm ">
            <figure className="flex justify-between px-7">
                <img
                src={technology.icon}
                alt={technology.name}
                className="w-12 h-12" />

                <p className="bg-pink-50 border-2 border-red-100 rounded-3xl px-3 py-1">{technology.badge}</p>

            </figure>
            
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl text-[#0F172A] my-3">
                {technology.name}
                </h2>
                
                <p className="text-[#64748B] text-[20px] mb-3">{technology.description}</p>

                <div className="flex justify-between my-4">
                    <p className="text-[#132c49] text-[19px] mb-3">{technology.category}</p>
                    <p className="text-[#64748B] text-[19px] mb-3">{technology.difficulty}</p>
                    <div className="text-[#21242a] text-[19px] mb-3 flex justify-between items-center gap-1">
                        <p className="text-yellow-500"><CiStar /></p>
                        <p>{technology.rating}</p>
                    </div>
                </div>

                <button onClick={()=>{
                    setIsAdded(true) 
                    handleAddToStack(technology)
                }}
                 className="btn btn-neutral rounded-[10px]"
                //  disabled = {isAdded === true ? true : false}
                 disabled = {isAdded ? true : false}
                //  disabled = {isAdded}
                 
                >

                    {isAdded === true ? "Added to Stack" : "Add to Stack" }

                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;