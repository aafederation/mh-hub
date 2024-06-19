import { Layout } from "../components/Layout";
import { MainBody } from "../components/MainBody";
import { Hero } from "@/components/Hero";
import client from "@/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

export async function getStaticProps() {
  const result = await client.queries.page({ relativePath: "home.md" });
  const posts = await client.queries.postConnection();

  return {
    props: { result, posts },
  };
}

export default function Home({ result, posts }) {
  const { data } = useTina(result);
  const { data: postData } = useTina(posts);

  return (
    <Layout>
      <Hero homeData={data.page} />
      <div
        className="wrapper gap-top-1000 gap-bottom-1000"
        data-variant="no-padding"
      >
        <MainBody homeData={data.page} posts={postData.postConnection.edges} />
      </div>
      <div className="[  index-blurb flow ] [ pad-top-1000 pad-right-500 pad-bottom-1000 pad-left-500 bg-canvas ]">
        <p className="text-500 weight-bold ta-center">
          AAF's Mental Health Hub was made possible with support from
        </p>
        <div className="wrapper" data-variant="narrow">
          <img src="/img/logo/MotherCabriniLogo.png" />
        </div>
      </div>
    </Layout>
  );
}
