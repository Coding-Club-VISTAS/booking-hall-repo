import Onboarding from '../assets/Onboarding1.png';
import VelsLogo from '../assets/VelsLogo.png';
import Right from '../assets/Right 2.png';
import Lock from '../assets/Lock 1.png';

function Onboarding1() {
  return (
    <div className="flex flex-col h-screen p-5 ">
      <div className="flex justify-between items-center">
      <img src={VelsLogo} alt='Vels Logo' className="w-20" />
        <div className="flex items-center justify-center font-ibmPlexMono">
          <span>Next</span>
          <img src={Right} alt='Left arrow' className="ml-1 mt-[2px]" />
        </div>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <img src={Onboarding} alt='Onboarding' className="h-[83vh] w-[70vw]" />
      </div>
      
      <div className="flex items-center justify-center mt-2">
        <button className="flex items-center justify-center font-ibmPlexMono p-2 bg-[#4C4DDC] text-white rounded-[10px] w-3/4">
          <img src={Lock} alt='Lock Icon' className="mr-5" />
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Onboarding1;