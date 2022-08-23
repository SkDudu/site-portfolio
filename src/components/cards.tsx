import react from 'react';
import { Horse, Heart, Cube, FigmaLogo, Sidebar } from "phosphor-react";

import brandingLogo from "../assets/brandingIcon.svg"

export default function Cards(){
    return(
        <div className='mt-12'>
            <span className="block text-center md:text-4xl tracking-tight font-medium text-gray-900 text-2xl">Serviços que ofereço</span>
            <span className="block text-center tracking-tight font-regular text-gray-500 mt-2 text-lg">Serviços que ajudam você a alcançar novos resultados no seu negócio</span>
            <div className='grid grid-cols-none md:grid-cols-3 gap-4 mt-8 mx-auto max-w-7xl px-4'>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                    <div className="w-16 h-16 flex justify-center p-4 m-5 bg-blue-100 rounded">
                        <FigmaLogo size={32} color="#14213D"/>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">UI/UX Design</div>
                        <p className="text-gray-700 text-base">
                        Meus designs crescem com sua empresa. Com experiência em branding, eu sei o melhor caminho para alcançar seus objetivos.
                        </p>
                    </div>
                    <div className="text-center px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#ui/ux</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#idv</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#mobilefirst</span>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-16 h-16 flex justify-center p-4 m-5 bg-blue-100 rounded">
                        <Sidebar size={32} color="#14213D"/>
                    </div>
                    
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Web Design</div>
                        <p className="text-gray-700 text-base">
                        Contruo sites escaláveis. Meu foco é aproximar a experiência do usuário para facilitar e tornar intuitivo a usabilidade dos meus projetos.
                        </p>
                    </div>
                    <div className="text-center px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#ui/ux</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#idv</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#mobilefirst</span>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-16 h-16 flex justify-center p-4 m-5 bg-blue-100 rounded">
                        <img alt="logo" className="h-8 w-auto sm:h-10" src={brandingLogo}/>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Identidade visual</div>
                        <p className="text-gray-700 text-base">
                        Faço a sua marca visível, relevante e eficaz colocando-a no centro de seus produtos digitais.
                        </p>
                    </div>
                    <div className="text-center px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#ui/ux</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#idv</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#mobilefirst</span>
                    </div>
                </div>
            </div>
        </div>        
    )
}