import { NextResponse } from 'next/server';

import allBlogs from '../userData/allBlogs.json';
import emptyFields from '../userData/emptyFields.json';
import blogCreated from '../userData/blogCreated.json';

export async function POST(request) {

    const { blogTitle, blogDesc, blogBy } = await request.json();

    const newBlog = {
        blogTitle,
        blogDesc,
        blogBy
    };

    // Create new blog if the fields are not empty

    if (newBlog.blogTitle === '' || newBlog.blogDesc === '') {
        return NextResponse.json(emptyFields);
    } else if (newBlog.blogDesc.length > 0 && newBlog.blogTitle.length > 0) {
        allBlogs.push(newBlog);
        return NextResponse.json(blogCreated);
    }

}

export async function GET(request) {
    return NextResponse.json(allBlogs);
}