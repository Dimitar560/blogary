'use client';
import { useState } from 'react';

import UsernameInput from '../../../elements/inputs/UsernameInput';
import PasswordInput from '../../../elements/inputs/PasswordInput';
import Button from '@mui/material/Button';
import Loading from '@/app/loading';

import style from './RegistrationForm.module.css';

import ModalDialog from '../../../elements/modal/ModalDialog';
import { useRouter } from 'next/navigation';

export default function RegistrationForm({ }) {

    const router = useRouter();

    const [awaitingResponse, setAwaitingResponse] = useState(false);

    const [showModal, setShowModal] = useState(null);
    const [modalMessage, setModalMessage] = useState('');

    // Registration submit handler

    async function submitHandler(e) {
        e.preventDefault();

        setAwaitingResponse(true);

        let data = {
            username: e.target.username.value,
            password: e.target.password.value,
            cpassword: e.target.cpassword.value,
        };

        let response = await fetch('http://localhost:3000/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-cache',
            body: JSON.stringify(data)
        });

        let responseData = await response.json();

        if (responseData.status === 'ok') {

            setAwaitingResponse(false);
            setShowModal(true);
            setModalMessage('User created');
            router.refresh();

        } else if (responseData.status === 'error') {

            setAwaitingResponse(false);
            setShowModal(true);
            setModalMessage(responseData.message);

        }

    }

    return (
        <>

            {awaitingResponse && <Loading />}

            {showModal && <ModalDialog setModal={setShowModal} textMessage={modalMessage} />}

            <form onSubmit={submitHandler}>

                <div className={style.RegistrationForm}>
                    <div className={style.loginTitle}>
                        <span>Registration form</span>
                    </div>
                    <div className={style.usernameInp}>
                        <UsernameInput inputName={'username'} labelName={'Username'} />
                    </div>
                    <div className={style.passwordInp}>
                        <PasswordInput inputName={'password'} labelName={'Password'} />
                    </div>
                    <div className={style.cpasswordInp}>
                        <PasswordInput inputName={'cpassword'} labelName={'Confirm Password'} />
                    </div>
                    <div className={style.buttonArea}>
                        <Button variant="contained" type='submit'>Register</Button>
                    </div>
                </div>

            </form>

        </>

    );

}