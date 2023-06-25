import background from "../../assets.app/img/user-profile-bg-1920x400.jpg";
import drprofile from "../../assets.app/img/doctors-list/182x280-0.jpg";
import { axiosInstance, getAuthHeader } from "../../constants/utils";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Appointment from "../common-components/Appointment/Appointment";
// import { useEvent } from "../../hooks/common-hook";
// import useToasty from "../../hooks/toasty";

function Detail() {
  const params = useParams()
  // const event = useEvent('new-appointment')
  // const toasty = useToasty()
  const [clinicDetail, setClinicDetail] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  useEffect(() => {
    getClinicDetail()
  }, [])

  // useEffect(() => {
  //   if (event?.data?.doctorId) {
  //       toasty.success('New Appointment Added')
  //   }
  // }, [event?.data])

  const getClinicDetail = async () => {
    try{
      let { data } = await axiosInstance.get('/clinic-detail', { params: { _id: params.id }, ...getAuthHeader()} )
      console.log('data', data)
      setClinicDetail(data?.clinicDetail)
    } catch(error){ console.error(error) }
  }

  const handleAppointmentModal =  () => {
    if(!userInfo) navigate('/patient-login', { state: { redirectTo: window.location.pathname }})
    setIsOpen(true)
  }

  return (
    <>
      <div style={{ background: "#f1f5fc" }} className="ms-content-wrapper">
        <div
          className="clinicbanner"
          style={{
            background: `url(${background})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="clinic-detail-name">{ clinicDetail?.detail?.name }</h4>
          <div className="d-flex flex-row  clinic-detail-img-container ">
            <div className="d-flex flex-row  justify-content-around  ">
              <img className="clinic-detail-img" src={drprofile} alt="" />
              <div className="mt-5 clinic-detail-mobile">
                <h4 className="text-light clinic-detail-drName mt-4">
                  { clinicDetail?.doctors && clinicDetail?.doctors['0']?.fullName || 'dfg' }
                </h4>
                <h6
                  style={{ display: "inline-block" }}
                  className="text-light clinic-detail-drName"
                >
                  { clinicDetail?.specialization || 'Specialization' }
                </h6>
              </div>
            </div>
            <div className="current-clicnic-token ml-5 d-flex flex-row">
              <h1 style={{ margin: "15px 15px" }}>45</h1>
            </div>
          </div>
        </div>
        <div className="bookappoint cursor-pointer" onClick={() => handleAppointmentModal()}>
          <h5 className="p-2">Book Appointment</h5>
        </div>
        <div className="clinic-deatils-header">
          <ul className="d-flex flex-row justify-content-around cursor-pointer">
            <li>
              <h5 className="clinic-detail-item">Waiting Area</h5>
            </li>
            <li>
              <h5 className="clinic-detail-item">Clinic Details</h5>
            </li>
            <li>
              <h5 className="clinic-detail-item cursor-pointer">
                About Clinic
              </h5>
            </li>
          </ul>
        </div>

        <div className="">
          {clinicDetail?.doctors?.map( doctor => 
            <div>
              <span> Full Name: {doctor.fullName}</span><br />
              <span> Phone: {doctor.phone}</span><br />
              <span> Token: {doctor.token}</span>
            </div>  
          )}
        </div>
        {true && (
          <div style={{ background: "#ffffff" }} className="text-center">
            <div class="container mt-5">
              <h2>Clinic Timing</h2>
              <table class="table table-bordered">
                <thead class="thead-light">
                  <tr>
                    <th>Session</th>
                    <th>Morning</th>
                    <th>Evening</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>9:00 AM - 1:00 PM</td>
                    <td>4:00 PM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>9:00 AM - 1:00 PM</td>
                    <td>4:00 PM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>9:00 AM - 1:00 PM</td>
                    <td>4:00 PM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>9:00 AM - 1:00 PM</td>
                    <td>4:00 PM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>9:00 AM - 1:00 PM</td>
                    <td>4:00 PM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>9:00 AM - 1:00 PM</td>
                    <td>4:00 PM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>10:00 AM - 12:00 PM</td>
                    <td>5:00 PM - 7:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="clinic-address text-start">
              <div className="row">
                <div className="col-sm-5">
                  <h4>
                    { clinicDetail?.detail?.address }
                  </h4>
                </div>
                <div className="col-sm-"></div>
              </div>
            </div>
          </div>
        )}

        {false && (
          <div style={{ background: "#ffffff" }} className="about-clinic ">
            <p className="p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, quo
              dolores repellendus animi, impedit natus corrupti sapiente vitae
              aliquid porro laborum numquam minus sequi possimus vel nesciunt
              cum? Labore, iusto! Repellendus quas alias vero! Consequuntur
              aliquid nesciunt dolorem voluptate! Ipsam vitae repellendus in,
              omnis quae illo ducimus corporis placeat quo dolor reiciendis est
              quas, molestiae quam libero laboriosam. Quas vero aliquam
              provident eum expedita quae veritatis molestias fugiat repudiandae
              sapiente consequuntur, deserunt eaque reiciendis minus debitis
              possimus mollitia ullam architecto quod iste. Libero blanditiis a,
              recusandae, earum assumenda quis fuga dolorem eius eos dolores
              repellendus cum fugit et dolorum nostrum ipsa ducimus commodi
              deserunt? Nemo quae sint, debitis nostrum expedita voluptatem
              sequi corrupti officia pariatur iste ullam aspernatur tempora
              voluptatum laborum perferendis accusantium quaerat tempore
              inventore, nisi iure odit autem architecto magnam! Sequi
              voluptates amet ipsam illum, ad ea nam nulla corrupti neque
              consequatur. Minus eveniet nobis eligendi impedit, quibusdam
              dolorem quas totam odio omnis laborum ab ipsa! Voluptatem voluptas
              quod iste magnam dignissimos similique dicta, id est error facilis
              excepturi eaque eum voluptates nam corrupti in dolores porro amet
              veritatis rem enim ex? Illo, soluta quasi! Delectus sequi
              doloribus adipisci fuga voluptatibus, nesciunt odio dolore sint
              incidunt atque ducimus optio deserunt officiis corrupti quod
              error. Obcaecati at hic nam amet facilis corrupti est pariatur
              placeat repellendus, reiciendis autem ab. Qui laudantium excepturi
              nesciunt necessitatibus expedita asperiores veritatis? Optio
              tenetur dicta ea, fuga accusantium, perspiciatis nihil ipsam unde
              eos a dolore quaerat nam. Reiciendis, quis aliquam? Distinctio
              quae quibusdam eligendi. Perferendis, consequuntur et dolores sint
              beatae earum ad est obcaecati, totam cum fugiat culpa quaerat,
              delectus voluptatem ullam suscipit repudiandae iste cumque
              provident voluptatibus recusandae? Magnam ipsum incidunt vel,
              cumque doloribus recusandae repellat at minus nesciunt modi
              voluptate enim deserunt nostrum velit. Dolorum aspernatur
              perspiciatis distinctio tenetur maxime est, aut nesciunt
              consequuntur, sint dolor consectetur blanditiis dolore incidunt
              illum aliquam sapiente at corporis voluptate expedita mollitia!
              Eum ullam dicta cumque voluptas! Consequuntur maiores excepturi
              voluptates omnis! Aliquam eaque repellendus facere modi a ad vel
              obcaecati ratione unde earum incidunt quod cumque repellat magni
              consequuntur, ducimus natus eligendi beatae quia deleniti. Iure ex
              necessitatibus eos veniam inventore sapiente aspernatur dolore
              optio saepe officia quaerat, eligendi consequuntur doloremque,
              voluptatem sint tempora dignissimos. Nesciunt sed mollitia, nisi
              dignissimos enim quibusdam repudiandae non doloremque cupiditate
              ipsa aliquid sunt dicta est pariatur odit eaque esse omnis
              quisquam, impedit nihil voluptatem? Dignissimos iure accusamus,
              consectetur exercitationem magnam quam. Incidunt similique, autem
              delectus quas natus fugit repellendus earum repudiandae!
              Laudantium a repellendus beatae assumenda nesciunt perspiciatis
              hic fugiat veniam aliquid necessitatibus similique expedita illum
              excepturi, nulla doloremque temporibus non, voluptates, laboriosam
              voluptas soluta. Quod repellat, iusto expedita temporibus sapiente
              ratione ex accusantium aliquid facere non quae atque voluptas nam
              eaque, distinctio veniam nostrum illum explicabo excepturi
              blanditiis reiciendis. Esse veniam voluptatum molestiae aliquam
              impedit eaque voluptatem animi id numquam consequuntur rerum atque
              in perspiciatis eos, sunt, nam tempora ab aliquid provident porro
              dignissimos ducimus, hic aperiam? Illum, minus. Quasi illo
              veritatis sed consequatur. Neque incidunt alias obcaecati!
            </p>
          </div>
        )}
      </div>
      { isOpen &&
        <Appointment 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          doctors={clinicDetail?.doctors}
          refresh={() => {}}
        />
      }
    </>
  );
}

export default Detail;
