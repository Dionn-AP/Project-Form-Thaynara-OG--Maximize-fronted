import { useState } from 'react';
import IconSend from '../assets/icon-enviar.svg';
import IconArrowDown from '../assets/icon-arrow-down.svg';
import { ThreeDots } from 'react-loading-icons';
import { dataOptions } from '../utils/data';
import api from '../services/api';
import clsx from 'clsx';

export function ContainerForm({ openMenu, setOpenMenu }) {
    const [inputName, setInputName] = useState("");
    const [inputCompany, setInputCompany] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const [errorGeneral, setErrorGeneral] = useState("");
    const [loading, setLoading] = useState(false);
    const [select, setSelect] = useState({ id: '', name: '' });
    const [rotate, setRotate] = useState(false);
    const [checked, setChecked] = useState(false);

    function handleChangeSelect(e) {
        const myOption = dataOptions.find((item) => item.id === parseInt(e.target.value));
        setSelect({ id: myOption.id, name: myOption.name });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!inputName || !inputCompany || !inputEmail || !inputPhone || !inputMessage || !select) {
            return setErrorGeneral("Você precisa preencher todos os campos do formulário")
        }

        try {
            setLoading(true);
            // eslint-disable-next-line
            const response = await api.post('/sendmail', {
                sender_name: inputName,
                company: inputCompany,
                email: inputEmail,
                phone: inputPhone,
                contact_reference: select.name ? select.name : "imprensa",
                sender_message: inputMessage,
                message_read: false
            });
            setInputName("");
            setInputCompany("");
            setInputEmail("");
            setInputPhone("");
            setInputMessage("");
            setLoading(false);
            setErrorGeneral(response.data.message);
            setTimeout(() => {
                setErrorGeneral("")
            }, 5000);
        } catch (error) {
            setLoading(false);
            console.log(error.message)
            return
        }
    }

    function disableRotation() {
        setRotate(false)
    }

    function activeAnimation() {
        setRotate(!rotate)
    }

    return (
        <main className="max-sm:w-full flex max-md:w-full max-md:mt-5 w-96 h-full flex-col max-sm:px-[1.1rem] items-center max-md:justify-start justify-center">
            {
                !openMenu &&
                <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className='max-lg:flex max-sm:hidden hidden absolute flex-col items-center z-20 justify-between max-lg:top-3 cursor-pointer top-2 max-lg:right-0 max-md:-right-2 h-6 w-2 rounded-full'>
                    <div className='h-[5px] w-[5px] rounded-full bg-button_and_icons'></div>
                    <div className='h-[5px] w-[5px] rounded-full bg-button_and_icons'></div>
                    <div className='h-[5px] w-[5px] rounded-full bg-button_and_icons'></div>
                </div>
            }
            <div className="max-sm:w-full max-md:w-[90%] flex flex-col w-full max-md:mb-4 mb-6 relative">
                <img
                    className={clsx('absolute bottom-[.9rem] right-3 cursor-pointer', {
                        'animate-rotate-arrow-up': rotate,
                        'animate-rotate-arrow-down': !rotate
                    })}
                    src={IconArrowDown}
                    alt="seta para baixo"
                />
                <span className="font-poppins text-text_color font-light text-sm">Seu contato é relacionado a:</span>
                <select
                    value={select.id}
                    onChange={(e) => handleChangeSelect(e)}
                    defaultValue="Imprensa"
                    onClick={activeAnimation}
                    onBlur={disableRotation}
                    className="-moz-appearance-none appearance-none focus:outline-none border border-border_inputs focus:border-1 focus:border-border_focused_inputs w-full cursor-pointer rounded font-poppins text-text_color font-normal text-sm py-2 px-3">
                    {
                        dataOptions.map((item) => (
                            <option
                                className='cursor-pointer'
                                key={item.id}
                                type="text"
                                value={item.id}
                            >
                                {item.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <form onBlur={() => setErrorGeneral("")} onSubmit={handleSubmit} className="max-sm:w-full max-md:w-[90%] flex flex-col w-full max-md:h-[90%] h-auto">
                <input
                    type="text"
                    className="appearance-none font-poppins font-light text-sm h-10 max-md:mb-3 mb-4 focus:rounded focus:outline-none border-2 border-transparent focus:border-2 focus:border-border_focused_inputs placeholder:opacity-90 placeholder:text-text_color placeholder:pb-0 border-b border-b-border_inputs px-2"
                    value={inputName}
                    onChange={e => setInputName(e.target.value)}
                    placeholder="Nome"
                />
                <input
                    type="text"
                    className="appearance-none font-poppins font-light text-sm h-10 max-md:mb-3 mb-4 focus:rounded focus:outline-none border-2 border-transparent focus:border-2 focus:border-border_focused_inputs placeholder:opacity-90 placeholder:text-text_color border-b border-b-border_inputs py-1 px-2"
                    value={inputCompany}
                    onChange={e => setInputCompany(e.target.value)}
                    placeholder="Empresa"
                />
                <input
                    type="text"
                    className="appearance-none font-poppins font-light text-sm h-10 max-md:mb-3 mb-4 focus:rounded focus:outline-none border-2 border-transparent focus:border-2 focus:border-border_focused_inputs placeholder:opacity-90 placeholder:text-text_color border-b border-b-border_inputs py-1 px-2"
                    value={inputEmail}
                    onChange={e => setInputEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <input
                    type="text"
                    className="appearance-none font-poppins font-light text-sm h-10 max-md:mb-6 mb-8 focus:rounded focus:outline-none border-2 border-transparent focus:border-2 focus:border-border_focused_inputs placeholder:opacity-90 placeholder:text-text_color border-b border-b-border_inputs py-1 px-2"
                    value={inputPhone}
                    onChange={e => setInputPhone(e.target.value)}
                    placeholder="Telefone"
                />
                <div className="flex relative flex-col w-full h-28 mb-7">
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
                    {
                        loading ?
                            <div className='flex w-full h-auto items-center justify-center absolute -bottom-8'>
                                <ThreeDots
                                    fill='#FF8585'
                                    width={"3em"}
                                />
                            </div>
                            :
                            errorGeneral &&
                            <div className='flex w-full h-auto items-center justify-center absolute -bottom-3'>

                                <span className={clsx('absolute text-xs font-light text-red-500', {
                                    "text-green-600": errorGeneral.includes("sucesso")
                                })}>{errorGeneral}</span>
                            </div>
                    }
                </div>
                <div className="flex w-full h-auto flex-row items-center justify-between">
                    <button
                        type='button'
                        className="flex flex-row relative font-poppins font-light text-right text-xs bg-button_not_robot text-color_black_default rounded-md items-center justify-center h-10 pl-1 w-2/5">
                        <input
                            type="checkbox"
                            checked={checked}
                            onClick={() => setChecked(!checked)}
                            className='z-20 outline-none absolute left-3 h-3 w-3 rounded cursor-pointer bg-background border-2 border-text_color_footer' />
                        Não sou um robô
                    </button>
                    <button
                        type='submit'
                        disabled={!checked}
                        className="flex flex-row relative font-poppins font-light text-sm bg-button_and_icons text-background rounded-md items-center justify-center h-10 w-2/5">Enviar
                        <img
                            className='absolute right-3 h-3.5'
                            src={IconSend}
                            alt="arrou-riht"
                        />
                    </button>
                </div>
            </form>
        </main>
    )
}