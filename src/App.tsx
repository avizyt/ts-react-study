import "./App.css";

import TopicCard from "./components/TopicCard";
import { topic } from "./constants";
import { TopicProps } from "./types/type";

function App() {
    const data: TopicProps[] = topic;
    return (
        <>
            <div>
                <h1 className='p-2 text-orange-600'>Typescript + React</h1>
                <hr className='' />
                <hr />
                <h1 className='p-2 text-3xl'>Topics for Web Development</h1>

                <hr />
                <div className='m-4 p-4 flex flex-col justify-evenly bg-slate-200 border rounded-lg'>
                    {data.map((item) => (
                        <TopicCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
