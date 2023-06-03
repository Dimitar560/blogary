'use client';

import Link from 'next/link';

import style from './page.module.css';

import Loading from '@/app/loading';

import { useEffect, useState } from 'react';



export default function SingleBlog({ params: { id } }) {

    const [awaitingResponse, setAwaitingResponse] = useState(false);

    const [serverData, setServerData] = useState([]);

    // Makes fetch request to get all blogs

    useEffect(() => {

        fetch('http://localhost:3000/api/newBlog')
            .then(res => res.json())
            .then(data => setServerData(data));

    }, []);


    // If data is not fetched in time, sets more loading time until data is fetched

    let numberId = +id;

    useEffect(() => {

        if (!serverData[numberId]) {

            setAwaitingResponse(true);

        } else {

            setAwaitingResponse(false);

        }


    }, [serverData, numberId]);


    return (
        <>

            {!serverData[numberId] && awaitingResponse && <Loading />}

            <Link href={'/allBlogs'} className={style.goBack}>{'< Go Back'}</Link>

            {/* Singular blog page */}

            {serverData[numberId] &&

                <div className={style.container}>

                    <span>Blog name : {serverData[numberId].blogTitle}</span>
                    <div className={style.splitLine}></div>
                    <span>{serverData[numberId].blogDesc}</span>
                    <div className={style.splitLine}></div>
                    <span>Blog by : {serverData[numberId].blogBy}</span>

                </div>

            }
        </>
    );

}