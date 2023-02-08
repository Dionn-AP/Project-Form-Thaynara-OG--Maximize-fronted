import { useState } from 'react';
import { DataTable } from '../components/DataTable/DataTable';
import { Header } from '../components/Header';

export function Inbox() {
    const [openMessage, setOpenMessage] = useState(false);

    return (
        <div className='flex flex-col w-screen min-h-screen items-center justify-start bg-background_inbox max-sm:px-2 max-md:px-4 max-lg:px-8 px-12'>
            <div className='flex flex-col w-full h-full items-center justify-start'>
                <Header
                    title="Caixa de Entrada"
                />
                <div className='flex min-h-[30rem] w-full rounded overflow-x-hidden font-poppins mb-20'>
                    <DataTable
                        openMessage={openMessage}
                        setOpenMessage={setOpenMessage}
                    />
                </div>
            </div>
        </div>
    )
}