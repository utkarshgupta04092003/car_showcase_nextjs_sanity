import { CarCatalogue, CarContainer, Footer, Header, Hero, Main } from "@/components";
import { getBlogs } from "../../sanity-studio/sanity.query";

export default async function Home() {
  // const profile = await getBlogs();
  // console.log('blogs', profile)

  return (
    <div>
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>

    </div>


  );
}
