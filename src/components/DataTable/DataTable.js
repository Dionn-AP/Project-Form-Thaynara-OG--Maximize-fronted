import React, { useState, useEffect } from 'react';
import { SpinningCircles } from 'react-loading-icons';
import { getItem, getHeaders } from '../../utils/functions';
import api from '../../services/api';
import clsx from 'clsx';
import { Message } from '../Message';

export function DataTable({ openMessage, setOpenMessage }) {
    const token = getItem('token');
    const [allMessages, setAllMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState([]);
    const [loading, setLoading] = useState(false);

    async function listAllMessages() {
        setLoading(true);
        try {
            await api.get('/viewmessages', getHeaders(token))
                .then(response => {
                    setAllMessages(response.data)
                })
            setLoading(false);

        } catch (error) {
            setLoading(false)
            return
        }
    }

    async function viewMessage(message) {
        setCurrentMessage(message);
        setOpenMessage(true);

        try {
            await api.patch(`/messageread/${message.id}`, {}, getHeaders(token));

        } catch (error) {
            return
        }
    }

    useEffect(() => {
        listAllMessages();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='flex relative flex-col w-full'>
            {
                openMessage &&
                <Message
                    currentMessage={currentMessage}
                    openMessage={openMessage}
                    setOpenMessage={setOpenMessage}
                    listAllMessages={listAllMessages}
                />
            }
            <div className='flex flex-row h-12 static w-full items-center justify-start bg-button_and_icons pl-3'>
                <h2 className="text-background font-medium text-lg">
                    Caixa de entrada
                </h2>
            </div>
            <div className='grid grid-rows-7 grid-flow-row gap-3 w-full py-5 px-4 bg-background shadow-md'>
                {
                    loading ?
                        <div className='flex mt-6 item-center justify-center h-auto w-full'>
                            <SpinningCircles
                                speed={1.2}
                                fill='#FF8585'
                            />
                        </div>
                        :
                        !allMessages.length ?
                            <span className='text-base font-semibold text-center text-text_color'>
                                Não há mensagens na sua caixa de entrada no momento
                            </span>
                            :
                            allMessages.map((message) => {
                                return (
                                    <div
                                        key={message.id}
                                        onClick={() => viewMessage(message)}
                                        className='flex flex-col items-start justify-center w-full truncate border-b cursor-pointer border-border_inputs hover:bg-zinc-100 transition-colors'
                                    >
                                        <span className='text-sm font-bold'>{message.sender_name}</span>
                                        <span className='text-xs font-thin'>{message.contact_reference}</span>
                                        <p
                                            className={clsx('text-sm font-normal text-color_black_default truncate py-2', {
                                                "font-semibold": !message.message_read
                                            })}>
                                            {message.sender_message}
                                        </p>
                                    </div>
                                )
                            })}
            </div>
        </div>
    );
}
