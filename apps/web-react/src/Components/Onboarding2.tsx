import Onboarding from '../assets/Onboarding2.png';
import VelsLogo from '../assets/dot.png';
import Right from '../assets/Right 2.png';
import Left from '../assets/Left 2.png';
import Lock from '../assets/Lock 1.png';

function Onboarding2() {
  return (
    // <div className='flex flex-col justify-center items-center space-y-4 p-4 min-h-screen'>
    //   <div className='flex items-center justify-between w-full'>
    //     <div className='flex items-center space-x-2'>
    //       <img src={Left} alt='Left arrow' />
    //       <span className='font-ibmPlexMono text-sm'>Back</span>
    //     </div>
    //     <img src={VelsLogo} className='h-8 w-auto' alt='Vels Logo' />
    //     <div className='flex items-center space-x-2'>
    //       <span className='font-ibmPlexMono text-sm'>Next</span>
    //       <img src={Right} alt='Right arrow' />
    //     </div>
    //   </div>
      
    //   <img src={Onboarding} className='w-full h-auto max-w-md' alt='Onboarding' />
      
    //   <button className='w-full max-w-md h-12 bg-[#7879FF] text-white rounded-lg text-sm flex items-center justify-center font-ibmPlexMono font-bold'>
    //     <img src={Lock} className='mr-2 w-5 h-auto' alt='Lock Icon' />
    //     Get Started
    //   </button>        
    // </div>

    <div className="flex flex-col h-screen p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center font-ibmPlexMono">
          <img src={Left} alt='Left arrow' className="mr-1 mt-[2px]" />
          <span>Back</span>
        </div>
        <img src={VelsLogo} alt='Vels Logo' />
        <div className="flex items-center">
          <span>Next</span>
          <img src={Right} alt='Left arrow' className="ml-1 mt-[2px]" />
        </div>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <img src={Onboarding} alt='Onboarding' className="h-[83vh] w-[78vw]" />
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

export default Onboarding2;