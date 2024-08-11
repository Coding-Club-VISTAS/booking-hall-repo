import VelsHallBooking from '../assets/VelsHallBooking.png';
import VelsLogo from '../assets/VelsLogo.png';

function Splash() {
  return (
    <div className='flex flex-col items-center space-y-7'>
      <img src={VelsLogo} alt="Vels Logo" />
      {/* <img src={VelsHallBooking} className='w-25 h-32' alt="Vels Hall Booking" /> */}
      <img src={VelsHallBooking} className='w-1/2 h-auto' alt="Vels Hall Booking" />
    </div>
  );
}

export default Splash;
