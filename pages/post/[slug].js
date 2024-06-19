import { Layout } from "@/components/Layout";
// import SinglePost from "@/components/SinglePost";
// import { getAllContentIds } from "@/lib/getData";
// import { getDefaultContentType } from "@/lib/utilities";
import client from "@/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

// const contentType = getDefaultContentType();

export default function Post({ blogPost, homePost }) {
  const { data } = useTina(blogPost);
  const { data: homeData } = useTina(homePost);
  return <Layout>hello</Layout>;
}

export async function getStaticPaths() {
  const posts = await client.queries.postConnection();
  const paths = posts.data.postConnection.edges.map((edge) => ({
    params: { slug: edge.node._sys.filename },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogPost = await client.queries.post({
    relativePath: `${params.slug}.md`,
  });
  const homePost = await client.queries.page({ relativePath: "home.md" });

  return {
    props: {
      blogPost,
      homePost,
    },
  };
}
