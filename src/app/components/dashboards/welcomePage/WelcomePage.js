import { useContext } from 'react';

import GlobalContext from '@/app/components/GlobalContext/GlobalContext';

import style from './WelcomePage.module.css';

export default function WelcomePage({ }) {

    // On user login

    const currentUser = useContext(GlobalContext).currentUser;

    return (
        <>
            <div className={style.textWrap}>
                <span className={style.userText}>Hello {currentUser}</span>

                <span className={style.longText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor consequat id.
                    Elementum nisi quis eleifend quam adipiscing vitae.
                    Urna id volutpat lacus laoreet non curabitur gravida arcu ac.
                    Nam aliquam sem et tortor consequat id.
                    Eu feugiat pretium nibh ipsum consequat.
                    Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit.
                    Velit euismod in pellentesque massa placerat duis.
                    Facilisis leo vel fringilla est ullamcorper eget.
                    A cras semper auctor neque vitae tempus quam.
                    Semper quis lectus nulla at. Non blandit massa enim nec dui nunc mattis enim ut.
                    Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Purus in massa tempor nec feugiat nisl.

                    Viverra tellus in hac habitasse platea.
                    Orci eu lobortis elementum nibh. Eget felis eget nunc lobortis.
                    Nullam vehicula ipsum a arcu cursus vitae congue mauris.
                    Dolor sit amet consectetur adipiscing elit ut aliquam.
                    Ut tortor pretium viverra suspendisse potenti nullam ac.
                    In tellus integer feugiat scelerisque varius morbi enim.
                    Quisque non tellus orci ac auctor augue mauris augue neque.
                    Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
                    Orci porta non pulvinar neque laoreet suspendisse.
                    Ac turpis egestas integer eget aliquet nibh praesent tristique.
                    Dolor morbi non arcu risus quis varius quam quisque id.
                    Fermentum dui faucibus in ornare. Magna sit amet purus gravida quis blandit turpis.
                    Id porta nibh venenatis cras sed felis. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.
                    Sit amet dictum sit amet justo donec. Massa massa ultricies mi quis hendrerit.
                    Quis lectus nulla at volutpat diam ut venenatis tellus in.
                </span>
            </div>
        </>
    );

}