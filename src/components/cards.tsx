import react from 'react';
import { Horse, Heart, Cube } from "phosphor-react";

export default function Cards(){
    return(
        <div className='text-center mt-12'>
            <span className="block text-4xl tracking-tight font-medium text-gray-900 md-4">Serviços que ofereço</span>
            <span className="block text-xk tracking-tight font-regular text-gray-500 mt-2 md-4">Serviços que ajudam você a alcançar novos resultados no seu negócio</span>
            <div className='grid grid-cols-3 gap-4 mt-8 mx-auto max-w-7xl px-4'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="h-[300px]" src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">UI/UX Design</div>
                        <p className="text-gray-700 text-base">
                        Meus designs crescem com sua empresa. Com experiência em branding, eu sei o melhor caminho para alcançar seus objetivos.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#ui/ux</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#idv</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#mobilefirst</span>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="h-[300px]" src="https://images.unsplash.com/photo-1605907126120-f68611516ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Web Design</div>
                        <p className="text-gray-700 text-base">
                        Contruo sites escaláveis. Meu foco é aproximar a experiência do usuário para facilitar e tornar intuitivo a usabilidade dos meus projetos.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#ui/ux</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#idv</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#mobilefirst</span>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="h-[300px]" src="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Identidade visual</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#ui/ux</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#idv</span>
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-[#14213D] mr-2 mb-2">#mobilefirst</span>
                    </div>
                </div>
            </div>
        </div>        
    )
}