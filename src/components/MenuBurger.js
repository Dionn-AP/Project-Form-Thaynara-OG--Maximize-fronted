import { useState } from "react";
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export function MenuBurger() {
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute top-0 w-full h-[33rem]">
            <div
                onClick={() => setOpen(!open)}
                className="max-sm:flex flex-col hidden z-30 absolute top-4 right-5 h-7 w-11 justify-between rounded-md">
                <div className={clsx("w-full h-[0.3rem] bg-button_and_icons rounded-md border-border_focused_inputs", {
                    "rotate-[40deg] translate-y-3 duration-200 ease-in": open,
                    "duration-300 ease-out": !open
                })}></div>
                <div className={clsx("w-full h-[0.3rem] bg-button_and_icons rounded-md border-border_focused_inputs", {
                    "-rotate-[40deg] absolute translate-y-3 duration-200 ease-in": open,
                    "duration-300 ease-out": !open
                })}></div>
                <div className={clsx("w-full h-[0.3rem] bg-button_and_icons rounded-md border-border_focused_inputs", {
                    "hidden": open,
                    "flex": !open
                })}></div>
            </div>
            <nav className={clsx("absolute flex-col h-full w-full z-20 items-center justify-center font-poppins font-light text-xl pt-10 text-button_and_icons bg-background_menu_burger tracking-wider", {
                "-translate-y-[33rem] duration-200 ease-in": !open,
                "translate-y-0 duration-300 ease-out": open
            })}>
                <ul className="flex flex-col h-[65%] w-full items-center justify-between pb-2 font-bold">
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Novidades</a></li>
                    <li><a href="/">Agenda</a></li>
                    <li><a href="/">Thay e Unicef</a></li>
                    <li><a href="/">Galeria</a></li>
                    <li><a href="/">São João da Thay</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>
                <ul className="flex flex-col h-[30%] w-full items-center justify-end font-medium">
                    <li className="mb-2"><a href="/">Imprensa</a></li>
                    <li><a href="/">Fã-Clubes</a></li>
                    <Link to="/signin" className="font-semibold text-xl text-button_and_icons mt-8">Área restrita</Link>
                </ul>
            </nav>
        </div>
    )
}