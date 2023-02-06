import { useState } from 'react';
import IconSend from '../assets/icon-enviar.svg';
import IconArrowDown from '../assets/icon-arrow-down.svg';
import clsx from 'clsx';

export function ContainerForm() {
    const [inputName, setInputName] = useState("");
    const [inputCompany, setInputCompany] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const [rotate, setRotate] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
    }

    function disableRotation() {
        setRotate(false)
    }

    function activeAnimation() {
        setRotate(!rotate)
    }

    return (
        <div className="flex w-96 h-full flex-col items-center justify-center">
            <div className="flex flex-col w-full mb-6 relative">
                <img
                    className={clsx('absolute bottom-[.9rem] right-3 cursor-pointer',{
                        'animate-rotate-arrow-up' : rotate,
                        'animate-rotate-arrow-down': !rotate
                    })}
                    src={IconArrowDown}
                    alt="seta para baixo"
                />
                <span className="font-poppins text-text_color font-light text-sm">Seu contato é relacionado a:</span>
                <select onClick={activeAnimation} onBlur={disableRotation} className="-moz-appearance-none appearance-none focus:outline-none border border-border_inputs focus:border-1 focus:border-border_focused_inputs w-full cursor-pointer rounded font-poppins text-text_color font-normal text-sm py-2 px-3">
                    <option>Imprensa</option>
                    <option>Eventos</option>
                    <option>Presença vip</option>
                    <option>Patrocício</option>
                </select>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-auto">
                <input
                    type="text"
                    className="appearance-none font-poppins font-light text-sm h-10 mb-4 focus:rounded focus:outline-none border-2 border-transparent focus:border-2 focus:border-border_focused_inputs placeholder:opacity-90 placeholder:text-text_color placeholder:pb-0 border-b border-b-border_inputs px-2"
                    value={inputName}
                    onChange={e => setInputName(e.target.value)}
                    placeholder="Nome"
                />
                <input
                    type="text"
                    className="appearance-none font-poppins font-light text-sm h-10 mb-4 focus:rounded focus:outline-none border-2 border-transparent focus:border-2 focus:border-border_focused_inputs placeholder:opacity-90 placeholder:text-text_color border-b border-b-border_inputs py-1 px-2"
                    value={inputCompany}
                    onChange={e => setInputCompany(e.target.value)}
                    placeholder="Empresa"
                />
                <input
                    type="text"
                    className="appearance-none font-poppins font-light text-sm h-10 mb-4 focus:rounded focus:outline-none border-2 border-transparent focus:border-2 focus:border-border_focused_inputs placeholder:opacity-90 placeholder:text-text_color border-b border-b-border_inputs py-1 px-2"
                    value={inputEmail}
                    onChange={e => setInputEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <input
                    type="text"
                    className="appearance-none font-poppins font-light text-sm h-10 mb-8 focus:rounded focus:outline-none border-2 border-transparent focus:border-2 focus:border-border_focused_inputs placeholder:opacity-90 placeholder:text-text_color border-b border-b-border_inputs py-1 px-2"
                    value={inputPhone}
                    onChange={e => setInputPhone(e.target.value)}
                    placeholder="Telefone"
                />
                <div className="flex flex-col w-full h-28 mb-7">
                    <label
                        className="font-poppins font-light text-sm text-text_color mb-1"
                        htmlFor="mensagem"
                    >Mensagem</label>
                    <textarea
                        className="appearance-none resize-none font-poppins font-light text-sm focus:outline-none border focus:border-2 focus:border-border_focused_inputs text-text_color placeholder:opacity-90 placeholder:text-text_color border-border_inputs py-1 px-2"
                        placeholder="Digite aqui..."
                        value={inputMessage}
                        onChange={e => setInputMessage(e.target.value)}
                        rows={4}
                        cols="50"
                    />
                </div>
                <div className="flex w-full h-auto flex-row items-center justify-between">
                    <button className="flex flex-row font-poppins font-light text-xs bg-button_not_robot text-color_black_default rounded-md items-center justify-center h-10 px-1 w-2/5">Não sou um robô</button>
                    <button type='submit' className="flex flex-row relative font-poppins font-light text-sm bg-button_and_icons text-background rounded-md items-center justify-center h-10 w-2/5">Enviar
                        <img
                            className='absolute right-3 h-3.5'
                            src={IconSend}
                            alt="arrou-riht"
                        />
                    </button>
                </div>
            </form>
        </div>
    )
}