// import { Link } from "react-router-dom";
// import { Card, CardDescription, CardContent } from "@repo/ui/components/ui/card";
// import { Button } from "@repo/ui/components/ui/button";
import Splash from './Components/Splash'
import Onboarding1 from './Components/Onboarding1';
import Onboarding2 from './Components/Onboarding2';
import Onboarding3 from './Components/Onboarding3';

function App() {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center bg-[#e4e4fa]">
            
                <Onboarding1 />
                {/* <Onboarding2 /> */}
                {/* <Onboarding3 /> */}
            
        </div>
    );
}

export default App;