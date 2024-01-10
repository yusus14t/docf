import ClinicCard from "../card/ClinicCard";

function Clinics({ }) {
  return (
    <div  className="bg-white mt-5 pt-3" >
      <div className="container">
        <div className="row mt-2 mb-2">
          <ClinicCard />
        </div>
      </div>
    </div>
  );
}

export default Clinics;
