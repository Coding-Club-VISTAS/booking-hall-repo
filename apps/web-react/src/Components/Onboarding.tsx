import { useState } from 'react';
import Onboarding1 from '../assets/Onboarding1.png';
import Onboarding2 from '../assets/Onboarding2.png';
import Onboarding3 from '../assets/Onboarding3.png';
import VelsLogo from '../assets/VelsLogo.png';
import VelsHallBooking from '../assets/dot.png';
import Right from '../assets/Right 2.png';
import Left from '../assets/Left 2.png';
import Lock from '../assets/Lock 1.png';

function Onboarding() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const getOnboardingImage = () => {
        switch (currentStep) {
            case 1:
                return Onboarding1;
            case 2:
                return Onboarding2;
            case 3:
                return Onboarding3;
            default:
                return Onboarding1;
        }
    };

    const getLogo = () => {
        if (currentStep === 2) {
            return (
                <img
                    src={VelsHallBooking}
                    alt="Vels Hall Booking Logo"
                />
            );
        }
        return (
            
            <img
                src={VelsLogo}
                alt="Vels Logo"
                className="w-20 h-auto"
            />
        );
    };

    return (
        <div className="flex max-w-[480px] flex-col h-screen p-5">
            <div className="flex justify-between items-center">
                {currentStep > 1 && (
                    <div
                        className="flex items-center justify-center font-ibmPlexMono cursor-pointer"
                        onClick={prevStep}
                    >
                        <img src={Left} alt="Left arrow" className="mr-1 mt-[2px]" />
                        <span>Back</span>
                    </div>
                )}
                {getLogo()}
                {currentStep < 3 && (
                    <div
                        className="flex items-center justify-center font-ibmPlexMono cursor-pointer"
                        onClick={nextStep}
                    >
                        <span>Next</span>
                        <img src={Right} alt="Right arrow" className="ml-1 mt-[2px]" />
                    </div>
                )}
            </div>

            <div className="flex-grow flex items-center justify-center">
                <img src={getOnboardingImage()} alt="Onboarding" className="h-[83vh] w-[70vw]" />
            </div>

            <div className="flex items-center justify-center mt-2">
                <button className="flex items-center justify-center font-ibmPlexMono p-2 bg-[#4C4DDC] text-white rounded-[10px] w-3/4">
                    <img src={Lock} alt="Lock Icon" className="mr-5" />
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Onboarding;
