import react, { useCallback, useState } from 'react';
import { BehanceLogo, DribbbleLogo } from "phosphor-react";

import { Link } from 'react-router-dom';

import logo_personal from "../assets/logo_personal.png"
import React from 'react';
import Modal from './Modal';

function Hero() {
    const [showModal, setShowModal] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    return (
      <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

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

                      <a href="/portfolio" className="font-medium text-gray-500 hover:text-gray-900">Portf??lio</a>

                      <a href="/contact" className="font-medium text-gray-500 hover:text-gray-900">Contato</a>
                  </div>
                </nav>
              </div>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-[#14213D] sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Ol??, meu nome ?? Eduardo Santos e sou</span>
                    <span className="block text-amber-500 xl:inline"> UX/UI Designer</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Transformando ideias em projetos incr??veis com criatividade e design interativos.</p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md flex space-x-6">
                      <Modal />                   
                      <a href="#" className="w-[130px] flex items-center justify-center px-8 py-3 border border-transparent md:text-base text-sm font-medium rounded-md text-[#14213D] bg-gray-100 hover:bg-[#E0E6F5] hover:text-bg-[#1E315C]"> Portf??lio </a>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md flex space-x-6">
                      <div className="flex content-center rounded-3xl bg-[#14213D] p-2 hover:bg-[#1E315C]">
                        <a href="https://www.behance.net/dudusantoss"> <BehanceLogo size={32} color="#fff" /> </a>
                      </div>

                      <div className="flex content-center rounded-3xl bg-[#14213D] p-2 hover:bg-[#1E315C]">
                      <a href="https://dribbble.com/DudsSantos" className=""> <DribbbleLogo size={32} color="#fff"/> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
          </div>
  
          
      </div>
    );
  }
  
  export default Hero;