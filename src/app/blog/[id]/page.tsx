// import { useRouter } from 'next/router'
'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { getAuthor, getDetails } from '../../../../sanity-studio/sanity.query';
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'


export default function ParticularBlogPage() {

    const { id }: any = useParams();
    const [blog, setBlogs] = useState({});
    const [author, setAuthor] = useState({});
    useEffect(() => {

        const fun = async () => {
            const blogRes = await getDetails(id);
            console.log('blog', id, blogRes);
            const author = await getAuthor(blogRes[0]?.author?._ref);
            console.log('author', author);
            setAuthor(author[0]);
            setBlogs(blogRes[0]);

        }
        fun();
    }, []);

    const builder = imageUrlBuilder({
        baseUrl: 'https://cdn.sanity.io/',
        projectId: 'f3mkwelj',
        dataset: 'production',
    })
    const urlFor = (source) => {
        if (source)
            return builder.image(source)
    };

    if (!blog._id) return <div>Loading...</div>

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src={urlFor(blog?.blogimg?.asset._ref) || "https://via.placeholder.com/300"}
                    alt={blog?.title}
                    className="h-64 w-full object-cover"
                />
                <div className="p-8">
                    <h2 className="text-3xl font-semibold mb-4">Title: {blog.title}</h2>
                    <h3 className="text-xl  mb-4">{blog.metadata}</h3>

                    <PortableText
                        value={blog.content}
                    />
                    <p className="text-gray-600 text-sm mb-4">
                        {blog.createdat}
                    </p>
                <div>
                    <p>Written by: </p>
                    <div className='flex items-center'>
                    <img src={urlFor(author?.authorImage?.asset._ref)} alt="" className='w-10 rounded-full mr-3' />
                    <p>{author?.title}</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}
