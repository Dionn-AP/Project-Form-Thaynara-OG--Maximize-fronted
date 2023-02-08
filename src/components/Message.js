import { useState } from 'react';
import { getItem, getHeaders, nameInitial } from '../utils/functions';
import { SpinningCircles } from 'react-loading-icons';
import Close from '../assets/icon-close.svg';
import IconSend from '../assets/icon-send.svg';
import api from '../services/api';
import clsx from 'clsx';

export function Message({ openMessage, setOpenMessage, currentMessage, listAllMessages }) {
    const token = getItem('token');
    const [loading, setLoading] = useState(false);
    const [replayMessage, setReplayMessage] = useState(false);
    const [inputTextAreMessage, setInputTextAreMessage] = useState("");
    const [valueSenderMessage, setValueSenderMessage] = useState("")

    function extendedReplay() {
        setReplayMessage(true)
    }

    async function sendMessage(e) {
        e.preventDefault();
        setLoading(true);
        if(!inputTextAreMessage) {
            return
        }
        try {
            const response = await api.post('/replay', {
                id_message: Number(currentMessage.id),
                receiver_email: valueSenderMessage ? valueSenderMessage : currentMessage.email,
                message: `${inputTextAreMessage}`
            }, getHeaders(token))
            setLoading(false);
            setInputTextAreMessage("");
            setReplayMessage(false);
        } catch (error) {
            setLoading(false);
            console.log(error.message)
        }
    }

    function closeMessage(){
        listAllMessages();
        setOpenMessage(false);
    }

    return (
        <div className="flex flex-col absolute top-[15%] z-10 bg-button_not_robot h-[25rem] w-full p-1 rounded font-poppins">
            <div className="flex flex-col h-full w-full item-center justify-between">
                <div className="flex flex-col w-full h-auto">
                    <div className="flex flex-row item-center justify-between h-10 w-full bg-background rounded p-2 mb-2" >
                        <img
                            onClick={() => closeMessage()}
                            className="absolute cursor-pointer top-4 right-4 h-4 w-auto"
                            src={Close}
                            alt="botão de fechar"
                        />
                        <span className="font-semibold text-sm text-text_color truncate">{`${currentMessage.company} - ${currentMessage.contact_reference}`}</span>
                    </div>
                    <div className="flex flex-row item-start justify-center h-14 w-full p-2 border-b border-text_color_footer mb-2">
                        <div className="flex items-center justify-center h-9 w-9 outline-none border-2 border-button_and_icons bg-background rounded-full">
                            <span className="font-semibold text-base text-button_and_icons">{nameInitial(currentMessage.sender_name)}</span>
                        </div>
                        <div className="flex flex-col item-start justify-start align-baseline h-full grow ml-2">
                            <span className="font-semibold text-sm text-text_color truncate mr-1">{currentMessage.sender_name}</span>
                            <span className="font-base text-xs text-text_color truncate">{`<${currentMessage.email}>`}</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={sendMessage} className="flex flex-col w-full h-[24rem] overflow-y-hidden bg-background">
                    <div className="flex relative flex-col w-full items-start justify-start overflow-y-scroll h-full rounded-sm p-2">
                        {
                            replayMessage &&

                            <img
                                onClick={() => setReplayMessage(false)}
                                className="absolute cursor-pointer bottom-1 max-sm:right-2 right-0 h-4 w-4 z-30"
                                src={Close}
                                alt="botão de fechar"
                            />
                        }
                        <p className='text-left break-all'>
                            {currentMessage.sender_message}
                        </p>
                    </div>
                    <div
                        onClick={() => extendedReplay()}
                        className={clsx('flex flex-col relative item-center z-10 justify-start h-8 w-full p-1 outline-none bg-button_not_robot border-2 border-text_color_footer rounded-b-md', {
                            "min-h-[12rem]": replayMessage
                        })}>
                        {
                            loading &&
                            <div className='flex absolute bottom-20 item-center justify-center h-auto w-full'>
                                <SpinningCircles
                                    speed={1.2}
                                    fill='#FF8585'
                                />
                            </div>
                        }
                        <textarea
                            className={clsx('flex resize-none placeholder:text-placeholder_color outline-none focus:border-none font-light text-sm w-full h-full pl-1', {
                                "pt-1": replayMessage
                            })}
                            placeholder='Responder'
                            value={inputTextAreMessage}
                            onChange={e => setInputTextAreMessage(e.target.value)}
                            rows={6}
                            cols="50"
                        />
                        {
                            replayMessage &&
                            <div className='flex flex-row h-8 item-center justify-start w-full border items-baseline border-text_color_footer rounded-sm p-1'>
                                <span
                                    className='text-xs font-thin text-text_color text-justify mr-2'
                                >Para:</span>
                                <input
                                    value={valueSenderMessage}
                                    onChange={(e) => setValueSenderMessage(e.target.value)}
                                    className='outline-none text-xs font-thin text-text_color h-5 text-left placeholder:text-center placeholder:font-thin rounded-sm p-1'
                                    placeholder={currentMessage.email}
                                />
                                <button
                                    className='absolute bottom-3 right-2 rounded-sm h-4'
                                    type='submit'>
                                    <img
                                        className='h-5 w-5 rotate-[90deg]'
                                        src={IconSend}
                                        alt="seta de enviar mesagem"
                                    />
                                </button>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
} 