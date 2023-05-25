import React, { useEffect, useState } from 'react';
import Logo from '../../assets.app/img/dashboard/doctor-1.jpg';
import { axiosInstance, getAuthHeader } from '../../constants/utils';

const Lockscreen = () => {
    const email = JSON.parse(localStorage.getItem('email')) || ""
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserByEmail()
    }, [])

    const getUserByEmail = async () => {
        let { data } = await axiosInstance.get('/user-by-email', { params: { email }, ...getAuthHeader() })
        setUser(data?.user)
    }

    const removeAccount = () => {
        localStorage.clear()
        window.location.replace('/login') 
    }

    return (
        <div className='pt-6'>
            <div class="ms-lock-screen-weather" style={{top:'7rem'}}>
                <p>38°</p>
                <p>San Francisco, CA</p>
            </div>
            <main class="body-content ms-lock-screen">
            <div class="ms-content-wrapper">
                <img class="ms-user-img ms-img-round ms-lock-screen-user mb-0" src={Logo} alt="people" />
                <h1 className='text-light mb-1' >{user?.firstName} {user?.lastName}</h1>
                <h2 className='fs-4 text-light mb-5'>{user?.email} </h2>
                {/* <form method="post"> */}
                <div class="ms-form-group my-0 mb-0 has-icon fs-14">
                    <input type="password" class="ms-form-input" maxLength={6} name="pin" placeholder="Enter Pin"/>
                    <i class="material-icons">security</i>
                </div>
                <button class="btn btn-primary" style={{marginTop:'1rem'}} onClick={() => {}}>Unlock</button>
                <button class="btn btn-danger mx-2" style={{marginTop:'1rem'}} onClick={() => removeAccount()}>Remove</button>
                {/* </form> */}
            </div>
            </main>
            <div class="ms-lock-screen-time">
                <p>04:25</p>
                <p>Friday, January 9</p>
            </div>
        </div>
    )
}

export default Lockscreen;