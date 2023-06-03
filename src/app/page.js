'use client';

import { useContext } from 'react';

import GlobalContext from './components/GlobalContext/GlobalContext';

import LoginRegistrationSwitch from './components/forms/loginRegistrationSwitch/LoginRegistrationSwitch';
import styles from './page.module.css';
import WelcomePage from './components/dashboards/welcomePage/WelcomePage';

export default function Home() {

    const userRole = useContext(GlobalContext).userRole;

    return (
        <main className={styles.main}>
            {
                userRole === 'LoggedUser' ?
                    <WelcomePage />
                    :
                    <LoginRegistrationSwitch />
            }
        </main>
    );
}
