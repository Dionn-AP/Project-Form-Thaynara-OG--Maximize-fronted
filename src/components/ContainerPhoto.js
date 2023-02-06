import LogoName from '../assets/logo-name.svg';
import PhotoThay from '../assets/ThaynaraOG.png';
import ImageContactSolid from '../assets/contato-solid.svg';
import ImageContactOutline from '../assets/contato-outline.svg';
import IconPhone from '../assets/icon-telefone.svg';
import IconMail from '../assets/icon-email.svg';

export function ContainerPhoto() {

    return (
        <div className="flex relative w-full h-full flex-col items-center justify-start">
            <img
                className='absolute top-5 left-5'
                src={LogoName}
                alt="Thaynara OG"
            />
            <div
                style={{ backgroundImage: `url(${PhotoThay})` }}
                className='absolute top-0 z-20 bg-no-repeat bg-cover bg-center h-[30rem] w-72'>
            </div>
            <div className='flex relative h-[27rem] w-full items-end justify-end mb-20'>
                <div className='flex items-center justify-center h-[26rem] w-full'>
                    <img
                        src={ImageContactSolid}
                        className='z-10 absolute right-10 bottom-0 h-[20rem] w-auto'
                    />
                    <img
                        src={ImageContactOutline}
                        className='z-30 absolute right-10 bottom-0 h-[20rem] w-auto'
                    />
                </div>
            </div>
            <div className='flex flex-col h-12 w-full items-center justify-center mb-20'>
                <div className='flex flex-col h-14 w-1/2 border-l-2 border-button_and_icons items-start justify-between pl-6 -mr-[5.2rem]'>
                    <span className=' font-normal text-placeholder_color text-sm tracking-widest'>CONTATO PROFISSIONAL</span>
                    <div className='flex flex-row items-center justify-center'>
                        <div className='flex flex-row mr-5'>
                            <img
                                className='h-3.5 w-auto mr-3'
                                src={IconPhone}
                                alt="Icone de Telefone" />
                            <span className=' font-bold strong text-placeholder_color text-[0.75rem]'>98 991234-5678</span>
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
        </div>
    )
}