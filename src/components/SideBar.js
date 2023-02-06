import { dataImages } from '../utils/data';

export function SideBar() {

    return (
        <div className="flex absolute top-4 right-4 flex-col w-44">
            <div className="flex flex-row w-full h-8 items-center justify-between mb-8">
                {
                    dataImages.map((image) => {
                        return (
                            <img className='h-5 w-auto cursor-pointer' src={image.image} alt={image.alt} />
                        )
                    })
                }
            </div>
            <nav className="flex flex-col h-52 w-full items-center justify-between font-poppins font-light text-sm">
                <ul className="flex flex-col h-[75%] w-full items-end justify-between">
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Novidadesbre</a></li>
                    <li><a href="#">Agenda</a></li>
                    <li><a href="#">Thay e Unicef</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">São João da Thay</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <ul className="flex flex-col h-[20%] w-full items-end justify-between">
                    <li><a href="#">Imprensa</a></li>
                    <li><a href="#">Fã-Clubes</a></li>
                </ul>
            </nav>
        </div>
    )
}