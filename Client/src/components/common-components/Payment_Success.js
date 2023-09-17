import React, { useEffect } from 'react'
import '../../assets.app/css/paymentSuccess.css'
import logo from '../../assets.app/img/logo/logo.jpg'
import { userInfo } from '../../constants/utils'
import { userRoutes } from '../../constants/constant'

const Payment_Success = () => {
  const pathname = userRoutes[userInfo?.userType]

  useEffect(() => {
    if( !userInfo ) window.location.replace('/')
  }, [])

  return (
    <>
      <div className="box"></div>
      <div className="d-flex justify-content-center bg-dark">
        <div className="receipt border mb-5 mt-5">
          <header className="receipt__header">
            <p className="receipttitle">
              <img style={{ width: "200px" }} src={logo} alt="" />
            </p>
            <p className="receipt__date">13 December 2020</p>
          </header>
          <dl className="receipt__list">
            <div className="receipt__list-row">
              <dt className="receipt__item">1 year Clinic Membership</dt>
              <dd className="receipt__cost">&#8377; 9.99</dd>
            </div>
            <div className="receipt__list-row receipt__list-row--total">
              <dt className="receipt__item">Total</dt>
              <dd className="receipt__cost"> &#8377; 26.75</dd>
            </div>
            <button className='btn btn-primary mt-4 w-100 shadow-none' onClick={() => window.location.replace(pathname)  }>Back To Dashboard</button>
          </dl>
        </div>
      </div>
    </>
  );
}

export default Payment_Success