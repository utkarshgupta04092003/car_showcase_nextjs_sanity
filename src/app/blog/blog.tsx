import { createClient } from 'next-sanity';
import React from 'react'

export default function Index({blogs}:any) {
    console.log('blogs', blogs);
  return (
    <div>
      
    </div>
  )
}


export async function getStaticProps() {

    const client = createClient({
            projectId: "09pewm48",
            dataset: "production",
            useCdn: true
          });
  
    const query = `*[_type == "blog"]`;
    const blogs = await client.fetch(query);
    return {
      props: {
        blogs
      }
    }
  }