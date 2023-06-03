
import Link from 'next/link';
import style from './BlogList.module.css';

export default function BlogList({ blogData }) {

    // Blog list component

    return (
        <>
            {blogData.map((x, i) => {
                return (
                    <Link style={{ textDecoration: 'none' }} key={i} href={`/allBlogs/${i}`}>
                        <div className={style.container}>
                            <div className={style.titleArea}>
                                <span>{x.blogTitle}</span>
                            </div>
                            <div className={style.splitLine}></div>
                            <div className={style.descArea}>
                                <span>{x.blogDesc.length > 250 ? `${x.blogDesc.substring(0, 250)}...` : x.blogDesc}</span>
                            </div>
                        </div>
                    </Link>
                );

            })}
        </>
    );

}