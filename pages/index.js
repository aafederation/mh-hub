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

  const filteredData = postData.postConnection.edges.filter((post) =>
    process.env.NODE_ENV === "development" ? post : post.node.draft !== true
  );

  return (
    <Layout>
      <Hero homeData={data.page} />
      <div
        className="wrapper gap-top-1000 gap-bottom-1000"
        data-variant="no-padding"
      >
        <MainBody homeData={data.page} posts={filteredData} />
      </div>
    </Layout>
  );
}
