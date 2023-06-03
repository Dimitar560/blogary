'use client';

import { useRouter } from 'next/navigation';

import { useContext, useEffect, useState } from 'react';

import RegularInput from '../../elements/inputs/RegularInput';
import TextAreaInput from '../../elements/inputs/TextAreaInput';
import Button from '@mui/material/Button';
import ModalDialog from '../../elements/modal/ModalDialog';
import Loading from '@/app/loading';

import GlobalContext from '@/app/components/GlobalContext/GlobalContext';

import style from './NewBlog.module.css';

import { redirect } from 'next/navigation';


export default function NewBlog({ }) {

    const currentUser = useContext(GlobalContext).currentUser;
    const userRole = useContext(GlobalContext).userRole;

    const [showModal, setShowModal] = useState(null);
    const [modalMessage, setModalMessage] = useState('');
    const [awaitingResponse, setAwaitingResponse] = useState(false);

    useEffect(() => {

        if (userRole !== 'LoggedUser') {
            redirect('/');
        }

    }, [userRole]);

    const router = useRouter();

    // Submits new blog

    async function submitHandler(e) {

        e.preventDefault();

        setAwaitingResponse(true);

        let data = {
            blogTitle: e.target.blogTitle.value,
            blogDesc: e.target.blogDesc.value,
            blogBy: currentUser
        };

        let response = await fetch('http://localhost:3000/api/newBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let responseData = await response.json();

        if (responseData.status === 'ok') {

            setShowModal(true);
            setModalMessage(responseData.message);
            setAwaitingResponse(false);

        } else if (responseData.status === 'error') {

            setShowModal(true);
            setModalMessage(responseData.message);
            setAwaitingResponse(false);

        }

        router.refresh();

    }

    return (
        <>

            {awaitingResponse && <Loading />}

            {showModal && <ModalDialog setModal={setShowModal} textMessage={modalMessage} />}

            <form onSubmit={submitHandler}>

                <div className={style.container}>

                    <div className={style.formLabel}>
                        <span>New blog</span>
                    </div>
                    <div className={style.blogTitle}>
                        <RegularInput inputName={'blogTitle'} labelName={'Blog title'} />
                    </div>
                    <div className={style.blogDesc}>
                        <TextAreaInput inputName={'blogDesc'} labelName={'Blog'} />
                    </div>
                    <div className={style.buttonArea}>
                        <Button variant="contained" type='submit'>Submit</Button>
                    </div>

                </div>

            </form>
        </>
    );

}