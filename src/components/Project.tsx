import { Link } from 'react-router-dom';

interface ProjectProps{
    title?: string,
    description?: string,
    slug?: string,
    thumbnail?: string,
}

export function Project(props: ProjectProps) {
    return (
        <Link to={`/portfolio/${props.slug}`}>
            <div className='grid grid-row gap-4 mt-8 mx-auto max-w-7xl px-4'>
                <div className="flex flex-col h-auto bg-white rounded shadow-lg md:flex-row 1">
                    <img className=" w-[400px] rounded-t md:h-auto md:rounded-none md:rounded-l-lg" src={props.thumbnail} alt=""/>
                    <div className="flex flex-col p-4 leading-normal text-left">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
                        <p className="mb-3 font-normal text-gray-700">{props.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}