import { useState } from "react";
import { TopicProps } from "../types/type";

const TopicCard = (props: TopicProps) => {
    const [allocatedTime, setAllocatedTime] = useState<number>(
        props.allocatedTime
    );

    const handleUp = () => {
        setAllocatedTime(allocatedTime + 1);
    };

    const handleDown = () => {
        if (allocatedTime != 0) {
            setAllocatedTime(allocatedTime - 1);
        }
    };

    return (
        <div className='flex flex-col items-center bg-slate-100 m-2 p-2 border rounded-md shadow-lg shadow-slate-500'>
            <h1 className='text-4xl text-orange-400 m-3'>{props.topic}</h1>
            <p className='text-xl text-slate-600'>{props.desc}</p>
            <h3 className='w-20 h-10 m-2 px-2 text-2xl text-slate-200 border text-center bg-slate-800 border-slate-700 rounded-md'>
                {allocatedTime}hr
            </h3>
            <div className='flex flex-row space-x-2'>
                <button
                    className='w-20 h-10 text-center bg-blue-600'
                    onClick={handleUp}>
                    Time+
                </button>
                <button
                    className='w-20 h-10 text-center bg-yellow-600'
                    onClick={handleDown}>
                    Time-
                </button>
            </div>
        </div>
    );
};

export default TopicCard;
