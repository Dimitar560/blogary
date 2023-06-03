'use client';
import { useState, useContext } from 'react';

import UsernameInput from '../../../elements/inputs/UsernameInput';
import PasswordInput from '../../../elements/inputs/PasswordInput';
import Button from '@mui/material/Button';
import Loading from '@/app/loading';

import style from './LoginForm.module.css';

import ModalDialog from '../../../elements/modal/ModalDialog';

import GlobalContext from '@/app/components/GlobalContext/GlobalContext';

import { useRouter } from 'next/navigation';

export default function LoginForm({ }) {
    const router = useRouter();

    const setUserRole = useContext(GlobalContext).setUserRole;

    const setCurrentUser = useContext(GlobalContext).setCurrentUser;


    const [showModal, setShowModal] = useState(null);
    const [modalMessage, setModalMessage] = useState('');

    const [awaitingResponse, setAwaitingResponse] = useState(false);

    // Login submit handler

    async function submitHandler(e) {
        e.preventDefault();

        router.refresh();

        setAwaitingResponse(true);


        let data = {
            username: e.target.username.value,
            password: e.target.password.value
        };

        let response = await fetch('http://localhost:3000/api/login', {
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
            setCurrentUser(responseData.username);
            setUserRole('LoggedUser');

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
                <div className={style.loginForm}>
                    <div className={style.loginTitle}>
                        <span>Login form</span>
                    </div>
                    <div className={style.usernameInp}>
                        <UsernameInput inputName={'username'} labelName={'Username'} />
                    </div>
                    <div className={style.passwordInp}>
                        <PasswordInput inputName={'password'} labelName={'Password'} />
                    </div>
                    <div className={style.buttonArea}>
                        <Button variant="contained" type='submit'>Login</Button>
                    </div>
                </div>
            </form>

        </>

    );

}