import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import phone from "../../assets.app/img/icons/icons8-phonecall-96.png";
import whatsapp from "../../assets.app/img/icons/icons8-whatsapp-96.png";
import email from "../../assets.app/img/icons/icons8-email-96.png";
import twitter from "../../assets.app/img/icons/icons8-twitter-100.png";
import { axiosInstance, formatPhone } from "../../constants/utils";

const Contact = () => {
  const [ contact, setContact ] = useState({})

  useEffect(() => {
    getContact()
  }, [])

  const getContact = async () => {
    try{
      let {data} = await axiosInstance.get('/common/website/CONTACT_INFO')
      setContact(data?.contact?.data)
    } catch(error){ console.error(error) }
  }

  return (
    <div className="container ">
      <div className="box"></div>

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
                    +91 { formatPhone(contact?.phone) } 
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
                  <Link target="_blank" to={`https://wa.me/${contact.whatsapp}`}>
                    +91 { formatPhone(contact.whatsapp)}
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
                  <Link target="_blank" to={`https://twitter.com/${contact.twitter}`}>
                    @{contact.twitter}
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 mt-4">
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="John Dee"
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="">Mobile Number</label>
              <input
                type="number"
                placeholder="8474986368"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <label htmlFor="">Topic</label>
              <input
                type="text"
                placeholder="Enter the topic here"
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="">Email Address</label>
              <input
                type="number"
                placeholder="Enter your Email address here (optional)"
                className="form-control"
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
            ></textarea>
          </div>
          <div className="row ">
            <div className="col-6">
              <button className=" btn-primary btn mx-1">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
