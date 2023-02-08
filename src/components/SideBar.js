import { dataImages } from '../utils/data';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export function SideBar({ openMenu, setOpenMenu }) {

    return (
        <div className={clsx("max-sm:hidden flex absolute z-20 max-md:top-1 top-4 max-md:-right-2 max-lg:right-2 right-4 flex-col w-44", {
            "max-lg:flex max-md:flex bg-background_menu_burger shadow-xl shadow-button_and_icons/30 rounded-lg px-3 pb-2": openMenu,
            "max-lg:hidden max-md:hidden": !openMenu
        })}>
            <div className="flex flex-row w-full h-8 items-center justify-between max-md:mb-4 mb-8">
                {
                    dataImages.map((image) => {
                        return (
                            <img
                                key={image.id}
                                onClick={() => window.open(image.link)}
                                className='h-5 w-auto cursor-pointer' src={image.image} alt={image.alt} />
                        )
                    })
                }
            </div>
            <nav className="flex flex-col h-[16rem] w-full items-end justify-between font-poppins font-light text-sm">
                <ul className="flex flex-col h-[75%] w-full items-end justify-between mb-2">
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Novidades</a></li>
                    <li><a href="#">Agenda</a></li>
                    <li><a href="#">Thay e Unicef</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">São João da Thay</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <ul className="flex flex-col h-[23%] w-full items-end justify-center">
                    <li><a href="#">Imprensa</a></li>
                    <li><a href="#">Fã-Clubes</a></li>
                </ul>
                <Link
                    className='mt-1 font-extralight text-xs'
                    to="/signin">
                    Área restrita</Link>
            </nav>
            {
                openMenu &&
                <span
                    onClick={() => setOpenMenu(false)}
                    className='text-xs font-medium text-color_black_default mt-3'>Fechar</span>
            }
        </div>
    )
}