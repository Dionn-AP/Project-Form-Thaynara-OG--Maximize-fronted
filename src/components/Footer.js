import { dataImages } from '../utils/data';

export function Footer() {
    const colorInverter = "invert-[50%] sepia-[20%] saturate-[25%] hue-rotate-[60deg] brightness-[34%] contrast-[22%]";

    return (
        <div className="flex flex-row h-9 w-full items-center justify-between px-8 bg-color_black_default">
            <span className="text-text_color_footer font-poppins font-thin text-[0.6rem]">
                2022 © THAYNARA OG. Todos os direitos reservados.
            </span>
            <div className="flex flex-row w-32 h-8 items-center justify-between">
                {
                    dataImages.map((image) => {
                        return (
                            <img
                                className='h-4 w-auto invert-[50%] sepia-[20%] saturate-[25%] hue-rotate-[60deg] brightness-[34%] contrast-[22%] cursor-pointer'
                                src={image.image}
                                alt={image.alt}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}