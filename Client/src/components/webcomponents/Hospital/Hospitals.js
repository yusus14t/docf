import HospitalCard from '../../card/HospitalCard';

export default ({ hospitalType }) => {
  return (
      <div className="section section-padding aaside mt-5 pt-3">
        <div className="container">
          <div className="row mt-2 mb-2">
            <HospitalCard hospitalType={hospitalType} />
          </div>
        </div>
      </div>
  );
}

