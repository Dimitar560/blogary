'use client';

import { useEffect, useState } from 'react';

import LoginForm from './login/LoginForm';
import RegistrationForm from './registration/RegistrationForm';

import style from './loginRegistrationSwitch.module.css';
import { Button } from '@mui/material';

export default function LoginRegistrationSwitch({ }) {

    const [formSwitch, setFormSwitch] = useState(false);
    const [btnText, setbtnText] = useState(false);

    // Switch between login and registration

    function switchHandler() {
        setFormSwitch(x => !x);
    }

    useEffect(() => {

        if (!formSwitch) {
            setbtnText('Sign up');
        } else if (formSwitch) {
            setbtnText('Sign in');
        }

    }, [formSwitch]);


    return (
        <>
            <div className={style.container}>

                {!formSwitch && <LoginForm />}

                {formSwitch && <RegistrationForm />}

                <span className={style.btnSwitch} onClick={switchHandler}>
                    <Button variant="contained">{btnText}</Button>
                </span>

            </div>
        </>
    );

}