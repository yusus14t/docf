
import Services from './Services';
import Doctors from './doctor/Doctors';
import Clinics from './Clinics'
import Hospitals from './Hospital/Hospitals';
import Search from '../common-components/Search';

function Home() {
    return (
      <>
        <div className="box"></div>
        <Search/>
        <Doctors />
        <Clinics style={{margin:"0"}} />
        <Hospitals/>

        <Services />
      </>
    );
        
}

export default Home;