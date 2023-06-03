import style from './loading.module.css';

export default function Loading() {
    return (

        <div className={style.loaderContainer}>
            <div className={style.spinner}></div>
        </div>

    );
}