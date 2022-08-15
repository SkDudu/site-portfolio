import React from "react";
import { Article, At, Envelope, IdentificationBadge, Phone, X } from "phosphor-react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="w-full flex items-center justify-center px-8 border border-transparent text-base font-medium rounded-md text-white bg-[#14213D] hover:bg-[#1E315C] focus:ring-4 focus:outline-none focus:ring-amber-300"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Vamos conversar
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Vamos conversar!
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <X size={24} color="black" weight="fill" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <p className="mb-4 text-slate-700 text-lg leading-relaxed">
                        Me envie um email contando mais sobre o projeto para que eu possa estar entrando em contato.
                    </p>
                    
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                      <div className="relative mb-6">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <IdentificationBadge size={20} color="#6b7280"/>
                        </div>
                        <input type={"text"} placeholder="Seu nome" className="bg-gray-50 border border-gray-300 pl-10 text-gray-900 text-sm rounded outline-none focus:ring block w-full p-2.5"/>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
                      <div className="relative mb-6">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <At size={20} color="#6b7280"/>
                        </div>
                        <input type={"email"} id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 pl-10 text-sm rounded outline-none focus:ring block w-full p-2.5" placeholder="name@email.com"/>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Número para contato</label>
                      <div className="relative mb-6">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <Phone size={20} color="#6b7280"/>
                        </div>
                        <input type={"tel"} placeholder="(00) 0 0000-0000" className="bg-gray-50 border border-gray-300 pl-10 text-gray-900 text-sm rounded outline-none focus:ring block w-full p-2.5"/>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Como posso lhe ajudar?</label>
                      <div className="relative mb-6">
                        <div className="flex absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                          <Article size={20} color="#6b7280"/>
                        </div>
                        <textarea rows={4} className="block p-2.5 w-full text-sm pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:ring" placeholder="Conte um pouco mais sobre o seu projeto..."></textarea>
                      </div>
                    </div> 

                    <h3 className="mb-2 text-lg font-medium text-gray-900">Serviços</h3>
                    <ul className="grid gap-3 w-full md:grid-cols-3">
                        <li>
                            <input type="checkbox" id="webdesign-option" value="" className="hidden peer" required={true}/>
                            <label htmlFor="webdesign-option" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                <div className="block">
                                    <div className="w-full font-semibold">Web Design</div>
                                </div>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" id="uidesign-option" value="" className="hidden peer" required={true}/>
                            <label htmlFor="uidesign-option" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                <div className="block">
                                    <div className="w-full font-semibold">UI Design</div>
                                </div>
                            </label>
                        </li>

                        <li>
                            <input type="checkbox" id="uxdesign-option" value="" className="hidden peer" required={true}/>
                            <label htmlFor="uxdesign-option" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                                <div className="block">
                                    <div className="w-full font-semibold">UX Design</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                    
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black-500 background-transparent font-bold px-6 py-2 uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-[#14213D] text-white active:bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded hover:bg-[#1E315C]"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}