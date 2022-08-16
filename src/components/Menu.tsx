import { BehanceLogo, DribbbleLogo } from "phosphor-react"
import logo_personal from "../assets/logo_personal.png"
import Modal from "./Modal"

export default function Menu(){
    return(
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-4 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-8 xl:pb-8">
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                          <span className="sr-only">Eduardo Santos</span>
                          <img alt="logo" className="h-8 w-auto sm:h-10" src={logo_personal}/>
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                          <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                          <span className="sr-only">Open main menu</span>
                          
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      <a href="/" className="font-medium text-gray-500 hover:text-gray-900">Home</a>

                      <a href="/portfolio" className="font-medium text-gray-500 hover:text-gray-900">Portfólio</a>

                      <a href="/contact" className="font-medium text-gray-500 hover:text-gray-900">Contato</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>          
      </div>
    )
}