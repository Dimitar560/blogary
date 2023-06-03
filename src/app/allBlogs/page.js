
import BlogList from '../components/elements/blogList/BlogList';
import style from './page.module.css';

// Gets all blogs from server side

async function getData() {

    const response = await fetch('http://localhost:3000/api/newBlog',
        {
            cache: 'no-store',
        });

    const blogData = await response.json();

    return blogData;

}

// Displays blog data

export default async function AllBlogs() {

    let serverData = await getData();

    return (
        <main className={style.main}>
            {serverData.length === 0 && <div className={style.noBlogs}>No blogs found</div>}
            {serverData.length > 0 && <BlogList blogData={serverData} />}
        </main>
    );
}