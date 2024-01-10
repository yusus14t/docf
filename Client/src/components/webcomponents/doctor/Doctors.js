import DoctorCard from "../../card/DoctorCardMain";

export default ({ filter }) => {
  // const handle = () => {
  //   Navigate("/patient-login", {
  //     state: { redirectTo: window.location.pathname },
  //   });
  // };
  return (
      <div className="section section-padding mt-5 pt-3">
        <div className="container mwidth">
          <div className="row">
            <DoctorCard filter={filter} />
          </div>
        </div>
      </div>
  )
}

