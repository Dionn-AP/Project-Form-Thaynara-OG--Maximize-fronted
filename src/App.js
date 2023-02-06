import { ContainerForm } from './components/ContainerForm';
import { ContainerLeft } from './components/ContainerLeft';
import { Footer } from './components/Footer';
import { SideBar } from './components/SideBar';
import './styles/global.css';

function App() {
  return (
    <div className='flex flex-col w-screen h-screen justify-between items-center font-poppins'>
      <div className='w-full h-full flex flex-row items-center justify-between px-5'>
        <div className="flex w-2/4 h-full flex-col items-center justify-center">
          <ContainerLeft />
        </div>
        <div className="flex w-2/4 h-full relative flex-col items-start justify-center pl-4">
          <SideBar />
          <div className="flex flex-col">
            <ContainerForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
