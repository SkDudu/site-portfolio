import cape_anni from "../assets/anni-capa.png"
import cape_idv from "../assets/idv-capa.png"

export default function recentWork(){
    return(
        <div className='text-center mt-12'>
            <span className="block text-4xl tracking-tight font-medium text-gray-900 md-4">Projetos mais recentes</span>
            <span className="block text-xk tracking-tight font-regular text-gray-500 mt-2 md-4">Sempre construindo projetos sejam eles pequenos ou grandes!</span>
        
            <div className='grid grid-row gap-4 mt-8 mx-auto max-w-7xl px-4'>
                <div className="flex flex-col h-auto bg-white rounded shadow-lg md:flex-row 1">
                    <img className=" w-[400px] rounded-t md:h-auto md:rounded-none md:rounded-l-lg" src={cape_idv} alt=""/>
                    <div className="flex flex-col p-4 leading-normal text-left">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Identidade pessoal - Eduardo Santos</h5>
                        <p className="mb-3 font-normal text-gray-700">O Anni é um sistema web que funciona como um hub de projetos de pesquisa para o curso de psicologia da Universidade de Fortaleza. Professores podem cadastrar projetos e convidar supervisores e estagiários de práticas clínicas. A partir disso, conseguem monitorar os atendimentos que acontecem e analisar dados sobre os pacientes e os estagiários que estão os acompanhando.</p>
                        <div>
                        <a href ="" className="flex flex-column w-[190px] items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#14213D] bg-gray-100 hover:bg-[#E0E6F5] hover:text-bg-[#1E315C] md:py-4 md:text-lg md:px-10">Ver mais </a>   
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-row gap-4 mt-8 mx-auto max-w-7xl px-4'>
                <div className="flex flex-col h-auto bg-white rounded shadow-lg md:flex-row 1">
                    <img className=" w-[400px] rounded-t md:h-auto md:rounded-none md:rounded-l-lg" src={cape_anni} alt=""/>
                    <div className="flex flex-col p-4 leading-normal text-left">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Anni</h5>
                        <p className="mb-3 font-normal text-gray-700">O Anni é um sistema web que funciona como um hub de projetos de pesquisa para o curso de psicologia da Universidade de Fortaleza. Professores podem cadastrar projetos e convidar supervisores e estagiários de práticas clínicas. A partir disso, conseguem monitorar os atendimentos que acontecem e analisar dados sobre os pacientes e os estagiários que estão os acompanhando.</p>
                        <div>
                            <a href ="" className="flex flex-column w-[190px] items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#14213D] bg-gray-100 hover:bg-[#E0E6F5] hover:text-bg-[#1E315C] md:py-4 md:text-lg md:px-10">Ver mais </a>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}