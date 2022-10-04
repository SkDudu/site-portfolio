import { Eye, Heart } from "phosphor-react";
import Menu from "../components/Menu";

import { request } from 'graphql-request';

function Portfolio () {
    return(
        <>
            <Menu />

            <div className='py-24 text-center bg-blue-50'>
                <span className="block text-xl tracking-tight font-regular text-gray-500 mb-4">Projetos</span>
                <span className="block text-4xl tracking-tight font-medium text-gray-700">Projetos feitos ............</span>
            </div>

            <div className='grid grid-row gap-4 mt-8 mx-auto max-w-7xl px-4'>
                <a href="#" className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-z-1 ease-in-out">
                    <div className="w-auto flex justify-center rounded overflow-hidden">
                        <img  alt="" />
                    </div>
                    <div className="px-6 py-2">
                        <div className="font-bold text-xl mb-2">projects.title</div>
                    </div>
                    <div className="flex justify-end px-6 pt-4 pb-2">
                        <span className="flex mr-2">
                            <Heart weight="fill" size={18} color="#4b5563"/>
                        </span>
                        <span className="mr-2 mb-2">
                            <Eye weight="fill" size={18} color="#4b5563"/>
                        </span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Portfolio