
import Services from './Services';
import DoctorsList from './doctor/DoctorsList';
import Clinics from './Clinics'
import Hospitals from './Hospital/Hospitals';
import Search from '../common-components/Search';

function Home() {
    return (
      <>
        <div className="box"></div>
        <Search/>
        <DoctorsList />
        <Clinics style={{margin:"0"}} />
        <Hospitals/>

        <Services />
      </>
    );
        
}

export default Home;