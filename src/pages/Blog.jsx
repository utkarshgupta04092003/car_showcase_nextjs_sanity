'use client';
import { createClient } from 'next-sanity';
import { groq } from 'next-sanity';
import { useEffect, useState } from 'react';
import { getBlogs } from '../../sanity-studio/sanity.query';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url'



export default function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [filterBlog, setFilterBlog] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {

        const fun = async () => {
            const blogRes = await getBlogs();
            console.log('blog', blogRes);
            setBlogs(blogRes);
            setFilterBlog(blogRes);
        }
        fun();
    }, []);

    useEffect(() => {
        const fetchTimer = setTimeout(() => {
            console.log('calling', input);
            const temp = blogs?.filter((b) => b.title?.toLowerCase().includes(input?.toLowerCase()));
            setFilterBlog(temp);
        }, 1000);

        return () => clearTimeout(fetchTimer);
    }, [input]);

    const builder = imageUrlBuilder({
        baseUrl: 'https://cdn.sanity.io/',
        projectId: 'f3mkwelj',
        dataset: 'production',
    })
    const urlFor = (source) => builder.image(source);





    return (
        <div className='m-10'>
            <h1 className='text-center font-semibold text-3xl'>Car Pool blogs</h1>
            <div className='flex justify-center mt-5'>
                <input type="text"
                    className='border border-grey-300 outline-none px-4 py-2 rounded-md'
                    placeholder='Search...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />

            </div>

            <div>
                <div className="max-w-4xl mx-auto mt-10">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        {filterBlog?.map((blog) => (
                            <div
                                key={blog._id}
                                className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={urlFor(blog?.blogimg?.asset._ref)
                                        .auto('format')
                                        .fit('max')
                                        .width(720)
                                        .toString() || "https://via.placeholder.com/300"}
                                    alt={blog.title}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                    <p className="text-gray-600 text-sm">
                                        {blog.createdat?.split('T')[0]}
                                    </p>
                                    <Link
                                        href={`/blog/${blog._id}`}
                                        className="mt-4 block text-blue-600 hover:underline">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
