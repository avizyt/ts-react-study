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
                <hr />
                <hr />
                <h1>Study Topics for Web Development</h1>

                <hr />
                <div className='flex flex-col justify-evenly bg-slate-200'>
                    {data.map((item) => (
                        <TopicCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
