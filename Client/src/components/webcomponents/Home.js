// import {FontAwesomeIcon} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBedPulse, faHeartPulse, faPills,  faPrescriptionBottleAlt, faStethoscope, faUserTimes, faUsers } from '@fortawesome/free-solid-svg-icons'
import Slider from "../../constants/Slider";
import img1 from '../../assets.web/img/home-1/400x280.jpg'
import img2 from '../../assets.web/img/home-1/370x250.jpg'
import Services from './Services';
import DoctorsList from './doctor/DoctorsList';
import ClinicGrid from './ClinicGrid'
import HospitalGrid from './Hospital/HospitalGrid';
import Search from '../common-components/Search';
import Cardlist from '../user-component/patient/Cardlist';

function Home() {
    return (
      <>
        <div className="box"></div>
        <Search/>
        <DoctorsList />
        <ClinicGrid style={{margin:"0"}} />
        <HospitalGrid/>

        <Services />
      </>
    );
        
}

export default Home;