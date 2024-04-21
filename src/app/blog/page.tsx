import { createClient } from 'next-sanity';
import { groq } from 'next-sanity';
import Blog from './blog';


export default function BlogPage({ data }:any) {
  console.log('blog from page', data)
  return (
    <div>
      {/* Content Here */}
      <Blog/>
      blog
    </div>
  );
}

// export async function getServerSideProps() {
//   const client = createClient({
//     projectId: "09pewm48",
//   });

//   const query = groq`*[_type == "post"]`;

//   const data = await client.fetch(query);

//   return {
//     props: {
//       data,
//     },
//   };
// }
