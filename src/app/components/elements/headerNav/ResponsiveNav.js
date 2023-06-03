import { useContext, useEffect, useState, useRef } from 'react';

import { redirect } from 'next/navigation';

import Link from 'next/link';

import GlobalContext from '@/app/components/GlobalContext/GlobalContext';

import Loading from '@/app/loading';

import style from './ResponsiveNav.module.css';

export default function HeaderNav({ path }) {

    const [awaitingResponse, setAwaitingResponse] = useState(false);
    const [slide, setSlide] = useState(false);

    const userRole = useContext(GlobalContext).userRole;
    const setUserRole = useContext(GlobalContext).setUserRole;
    const setCurrentUser = useContext(GlobalContext).setCurrentUser;

    function logoutHandler() {

        setAwaitingResponse(true);

        setTimeout(() => {

            setUserRole(null);
            setCurrentUser(null);
            setAwaitingResponse(false);
            redirect('/');

        }, 1000);

    }

    // On click outside of the nav bar closes the navigation

    const containerRef = useRef();

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
        function handleClick(e) {
            if (containerRef && containerRef.current) {
                const ref = containerRef.current;
                if (!ref.contains(e.target)) {
                    setSlide(false);
                }
            }
        }
    }, []);

    return (
        <>
            {awaitingResponse && <Loading />}
            <nav ref={containerRef}>

                <div className={style.headerNav}>

                    <div style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
                        <span>Blogery</span>
                    </div>

                    <div
                        onClick={() => setSlide(prev => !prev)}
                        style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                    >
                        {slide ? 'X' : '≡'}
                    </div>
                </div>

                {slide && <div className={style.links}>

                    <Link href={'/'}>
                        <span
                            className={path === '/' ? style.active : ''}
                        >
                            Home
                        </span>
                        <div className={style.splitLine}></div>
                    </Link>
                    {userRole === 'LoggedUser' &&
                        <Link href={'/createBlog'}>
                            <span
                                className={path === '/createBlog' ? style.active : ''}
                            >
                                Create Blog
                            </span>
                            <div className={style.splitLine}></div>
                        </Link>
                    }
                    <Link href={'/allBlogs'}>
                        <span
                            className={path === '/allBlogs' ? style.active : ''}
                        >
                            All Blog
                        </span>
                        <div className={style.splitLine}></div>
                    </Link>
                    {userRole === 'LoggedUser' &&

                        <span style={{ cursor: 'pointer', fontSize: '1.3rem' }} onClick={logoutHandler}>
                            Log out
                            <div className={style.splitLine}></div>
                        </span>

                    }

                </div>}

            </nav>
        </>
    );

}