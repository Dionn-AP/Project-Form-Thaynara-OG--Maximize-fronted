import LogoName from '../assets/logo-name.svg';
import PhotoThay from '../assets/ThaynaraOG.png';
import ImageContactSolid from '../assets/contato-solid.svg';
import ImageContactOutline from '../assets/contato-outline.svg';
import LogoVertical from '../assets/logo-name-vertical.svg';
import IconPhone from '../assets/icon-telefone.svg';
import IconMail from '../assets/icon-email.svg';

export function ContainerPhoto() {

    return (
        <aside className="flex relative w-full h-full flex-col items-center max-sm:justify-center justify-start">
            <img
                className='max-sm:hidden max-[1024px]:flex hidden absolute top-5 -left-2 cursor-pointer z-10'
                src={LogoVertical}
                alt="Thaynara OG"
            />
            <img
                className='max-lg:hidden absolute top-5 left-5 cursor-pointer z-10'
                src={LogoName}
                alt="Thaynara OG"
            />
            <div
                style={{ backgroundImage: `url(${PhotoThay})` }}
                className='max-sm:w-full max-sm:h-[40rem] max-md:h-[27rem] max-sm:opacity-80 absolute top-0 max-sm:z-auto z-20 bg-no-repeat bg-cover bg-center h-[30rem] w-72'>
            </div>
            <div className='flex relative max-sm:h-full h-[27rem] max-sm:w-full w-full max-sm:items-center items-end max-sm:justify-center max-md:justify-center justify-end max-sm:m-0 max-md:mb-2 mb-20'>
                <div className='flex items-center justify-center max-sm:h-[27rem] h-[26rem] w-full max-sm:mt-5'>
                    <img
                        src={ImageContactSolid}
                        className='z-10 absolute max-sm:bottom-[2%] max-sm:right-auto max-lg:right-0 max-xl:right-0 right-10 bottom-0 max-sm:h-[10rem] max-lg:h-[16rem] h-[20rem] w-auto'
                        alt="imagem solida"
                    />
                    <img
                        src={ImageContactOutline}
                        className='z-30 absolute max-sm:bottom-[1%] max-sm:right-[8%] max-lg:right-0 max-xl:right-0 right-10 bottom-0 max-sm:h-[10rem] max-lg:h-[16rem] h-[20rem] w-auto'
                        alt="imagem outline"
                    />
                </div>
            </div>
            <div className='max-sm:hidden flex max-lg:flex-row flex-col max-md:h-10 h-12 w-full items-center max-md:justify-start justify-center max-md:mb-0 max-md:mt-6 max-md:ml-8 mb-20 max-md:pl-0 max-lg:pl-12'>
                <div className='flex max-lg:flex-row flex-col max-md:h-8 h-14 max-lg:w-full max-xl:w-auto w-1/2 border-l-2 border-button_and_icons max-lg:items-center max-xl:items-center items-start justify-between max-md:pl-2 pl-6 max-xl:mr-0 -mr-[11%]'>
                    <span className='font-normal text-placeholder_color max-md:text-xs max-md:items-end text-sm max-md:tracking-wide tracking-widest'>CONTATO PROFISSIONAL</span>
                    <div className='flex max-lg:flex-col flex-row max-lg:w-full max-lg:items-start items-center justify-between'>
                        <div className='flex flex-row mr-5'>
                            <img
                                className='h-3.5 w-auto mr-3'
                                src={IconPhone}
                                alt="Icone de Telefone" />
                            <span className='font-bold strong text-placeholder_color text-[0.75rem]'>98 991234-5678</span>
                        </div>
                        <div className='flex flex-row items-center justify-center'>
                            <img
                                className='h-3 w-auto mr-3'
                                src={IconMail}
                                alt="Icone de Email" />
                            <span className=' font-bold text-placeholder_color text-[0.75rem]'>contato@thaynaraog.com.br</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}