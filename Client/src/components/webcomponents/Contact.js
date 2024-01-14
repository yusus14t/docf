import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import phone from "../../assets.app/img/icons/icons8-phonecall-96.png";
import whatsapp from "../../assets.app/img/icons/icons8-whatsapp-96.png";
import email from "../../assets.app/img/icons/icons8-email-96.png";
import twitter from "../../assets.app/img/icons/icons8-twitter-100.png";
import location from "../../assets.app/img/icons/location.png";
import { axiosInstance, formatPhone, getAuthHeader } from "../../constants/utils";
import useToasty from "../../hooks/toasty";
import {useForm} from 'react-hook-form'

const Contact = () => {
  const [ contact, setContact ] = useState({})
  const toasty = useToasty()
  const { register, handleSubmit, reset } = useForm({ onChange: true });

  useEffect(() => { 
    getContact()
  }, [])

  const getContact = async () => {
    try{
      let {data} = await axiosInstance.get('/website/CONTACT_INFO')
      setContact(data?.contact?.data)
    } catch(error){ console.error(error) }
  }

  const saveContactQuery = async ( data ) => {
    try{
      await axiosInstance.post('/website/CONTACT_QUERY', data, getAuthHeader())
      toasty.success('Message Sent.')
      reset({})
    } catch(error){ console.error(error) }
  }

  return (
    <div className="container mt-5 pt-3">
      <h3 className="text-center">Get in Touch</h3>
      <div className="row ">
        <div className="col-sm-6 contact-box-right">
          <ul>
            <li className="mb-4">
              <div className="contact-list-item d-flex flex-row justify-content-around align-items-center">
                <div className="contact-icon-container contact-kk">
                  <img className="contact-icons" src={phone} alt="" />
                </div>
                <div className="contact-kk ">
                  <Link to={`tel:${contact.phone}`} className="href_location">
                    +91 {formatPhone(contact?.phone)} 
                  </Link>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="contact-list-item d-flex flex-row justify-content-around align-items-center">
                <div className="contact-icon-container contact-kk">
                  <img className="contact-icons" src={whatsapp} alt="" />
                </div>
                <div className="contact-kk">
                  <Link
                    target="_blank"
                    to={`https://wa.me/${contact.whatsapp}`}
                  >
                    +91 {formatPhone(contact.whatsapp)}
                  </Link>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="contact-list-item d-flex flex-row justify-content-around align-items-center">
                <div className="contact-icon-container contact-kk">
                  <img className="contact-icons " src={email} alt="" />
                </div>
                <div className="contact-kk">
                  <Link target="_blank" to={`mailto:${contact.email}`}>
                    {contact.email}
                  </Link>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="contact-list-item d-flex flex-row justify-content-around ml-5 align-items-center">
                <div className="contact-icon-container contact-kk">
                  <img src={twitter} className="contact-icons" alt="" />
                </div>
                <div className=" contact-kk">
                  <Link
                    target="_blank"
                    to={`https://twitter.com/${contact.twitter}`}
                  >
                    @{contact.twitter}
                  </Link>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="contact-list-item d-flex flex-row justify-content-around ml-5 align-items-center">
                <div className="contact-icon-container contact-kk">
                  <img src={location} className="contact-icons" alt="" />
                </div>
                <div className=" contact-kk">
                  <Link
                    target="_blank"
                    to={`https://twitter.com/${contact.twitter}`}
                  >
                    {/* {contact.twitter} */}
                    M/s Paai India 3/361, <br />
                    Aligarh-202002 (U.P), India
                    
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
          <div className="col-sm-6 mt-4">
          <form onSubmit={handleSubmit(saveContactQuery)} >
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"

                  {...register('name', {
                    required: true
                  })}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="form-control"

                  {...register('mobile', {
                    required: true,
                    minLength: 10,
                    maxLength: 10
                  })}

                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-6">
                <label htmlFor="">Topic</label>
                <input
                  type="text"
                  placeholder="Enter topic here"
                  className="form-control"
                    
                  {...register('topic', {
                    required: true,
                  })}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="">Email Address (optional)</label>
                <input
                  type="email"
                  placeholder="Enter Email address "
                  className="form-control"
                  
                  {...register('email', {
                    required: true,
                  })}
                  
                />
              </div>
            </div>
            <div className="row p-3">
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="write your message here"
                {...register('message', {
                  required: true,
                })}
              ></textarea>
            </div>
            <div className="row ">
              <div className="col-6">
                <button
                  type="submit"
                  className=" btn-primary shadow-none btn mx-1"
                  // onClick={() => saveContactQuery()}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;
