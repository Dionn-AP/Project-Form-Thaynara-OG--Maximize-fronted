import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem, getHeaders, nameInitial } from '../utils/functions';
import clsx from 'clsx';
import api from '../services/api';

export function Header({ title }) {
    const navigate = useNavigate();
    const token = getItem('token');
    // eslint-disable-next-line
    const [user, setUser] = useState([]);
    const [open, setOpen] = useState(false);

    async function getUser() {
        try {
            const response = await api.get('/user', getHeaders(token));
            setUser(response.data);
        } catch (error) {
            return
        }
    }

    useEffect(() => {
        // eslint-disable-next-line
        getUser();
        // eslint-disable-next-line
    }, [])

    return (
        <header className="flex flex-row items-center justify-between w-full h-16 pl-1 mb-6">
            <h1 className="text-2xl font-bold text-button_and_icons">{title}</h1>
            <div
                onClick={() => setOpen(!open)}
                className="flex relative z-10 items-center justify-center max-sm:h-9 max-sm:w-9 h-11 w-11 outline-none bg-button_and_icons rounded-full shadow-lg shadow-button_and_icons/50 cursor-pointer">
                <span className="font-semibold text-2xl text-background">{nameInitial(user.name)}</span>
                <div
                    onClick={() => navigate("/signin")}
                    className={clsx('flex absolute items-center justify-center rounded-full opacity-0 max-sm:h-9 max-sm:w-9 h-11 w-11 bg-background shadow-lg shadow-button_and_icons/50 cursor-pointer', {
                        "-translate-x-[3.5rem] z-30 opacity-100 duration-500 ease-in": open,
                        "translate-x-0 opacity-0 hidden duration-300 ease-out": !open
                    })}>
                    <span className='font-normal text-base text-button_and_icons'>Sair</span>
                </div>
            </div>
        </header>
    )
}