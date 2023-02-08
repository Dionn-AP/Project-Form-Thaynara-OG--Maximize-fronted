import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinningCircles } from 'react-loading-icons';
import PhotoThay from '../assets/ThaynaraOG.png';
import Eye from '../assets/icon-eye.svg';
import EyeClosed from '../assets/icon-eye-closed.svg';
import IconArrowLeft from '../assets/icon-arrow-left.svg';
import { setItem } from '../utils/functions';
import api from '../services/api';

export function SignIn() {
    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function Login(e) {
        e.preventDefault();

        if (!inputEmail && !inputPassword) {
            return setError("Informe email e senha para acessar o sistema")
        }
        if (inputEmail && !inputPassword) {
            return setError("Informe uma senha para acessar o sistema")
        }
        if (!inputEmail && inputPassword) {
            return setError("Informe um email para acessar o sistema")
        }

        try {
            setLoading(true);
            const response = await api.post('/login', {
                email: inputEmail,
                password: inputPassword
            });
            const { token, dataUser } = response.data;
            setItem('token', token);
            setItem('user', dataUser.id);
            setError("")

            if (token) {
                setLoading(false);
                navigate('/inbox')
            }

        } catch (error) {
            setLoading(false);
            if (error.response.status < 500) {
                return setError(error.response.data.message)
            } else {
                return
            }
        }
    }

    return (
        <div className="flex flex-col w-screen min-h-screen bg-gradient-radial from-background_menu_burger to-border_focused_inputs font-poppins">
            <div className="flex relative flex-col max-md:w-full h-full item-center justify-start">
                <img
                    onClick={() => navigate('/contact')}
                    className='max-sm:flex cursor-pointer absolute top-3 left-3 h-7 w-7'
                    src={IconArrowLeft}
                    alt="seta para a esquerda"
                />
                <div className='flex flex-col items-center justify-start mt-10 '>
                    <div
                        style={{ backgroundImage: `url(${PhotoThay})` }}
                        className='max-sm:w-[13rem] max-sm:h-[13rem] max-sm:z-auto z-10 max-[1540px]:h-[18rem] bg-no-repeat bg-cover bg-top h-[30rem] w-72 rounded-full border-2 shadow-xl shadow-button_and_icons/40 border-button_and_icons'>
                    </div>
                </div>
                <div className='flex flex-col w-full h-auto items-center'>
                    <form
                        onSubmit={Login}
                        className='flex flex-col w-full max-sm:w-full max-[1540px]:w-[28rem] h-auto items-center justify-center max-[540px]:px-4 max-sm:px-14 px-8 mb-4 mt-8'>
                        <div className='flex flex-col w-full h-11 mb-4'>
                            <input
                                type="text"
                                className="flex w-full appearance-none font-poppins font-light text-sm h-full rounded-lg focus:rounded-lg focus:outline-none border-2 border-border_focused_inputs focus:border-2 focus:border-button_and_icons placeholder:opacity-90 placeholder:text-text_color py-1 px-2"
                                value={inputEmail}
                                onChange={e => setInputEmail(e.target.value)}
                                placeholder="Email"
                                onBlur={() => setError(false)}
                            />
                        </div>
                        <div className='flex relative flex-col items-center w-full h-11 mb-10'>
                            <img
                                className='absolute top-3 right-2 h-6 w-6'
                                onClick={() => setShowPassword(!showPassword)}
                                src={!showPassword ? EyeClosed : Eye}
                                alt="olho aberto ou fechado"
                            />
                            <input
                                type={!showPassword ? "password" : "text"}
                                className="flex w-full appearance-none font-poppins font-light text-sm h-full rounded-lg focus:rounded-lg focus:outline-none border-2 border-border_focused_inputs focus:border-2 focus:border-button_and_icons placeholder:opacity-90 placeholder:text-text_color py-1 px-2"
                                value={inputPassword}
                                onChange={e => setInputPassword(e.target.value)}
                                placeholder="Senha"
                            />
                            {error && <span className='absolute text-sm font-normal -bottom-6 text-red-500'>{error}</span>}
                        </div>
                        <button
                            type="submit"
                            className="h-11 w-[60%] max-[1540px]:w-full rounded-lg bg-button_and_icons font-bold text-lg text-center text-background shadow-md shadow-color_black_default/20 cursor-pointer"
                        >Entrar</button>
                    </form>
                </div>
                <div className='flex absolute -bottom-16 item-center justify-center h-auto w-full'>
                    {
                        loading &&
                        <SpinningCircles
                            speed={1.2}
                            fill='#FF8585'
                        />
                    }
                </div>
            </div>
        </div>
    )
}