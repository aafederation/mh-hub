import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ListPosts } from "./ListPosts";
import { DownloadPDFs } from "./DownloadPDFs";

export const SinglePost = ({ postData }) => {
  return (
    <div className="wrapper single-post gap-bottom-1000">
      <div className="pad-top-500 pad-bottom-500">
        Home / Strategies to talk to my client / How to Support Your Child
      </div>
      <span className="date">
        <span data-tina-field={tinaField(postData, "date")}>
          {new Date(postData?.date).toLocaleDateString("en-us", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>{" "}
        |{" "}
        <span data-tina-field={tinaField(postData, "tags")}>
          {postData?.tags?.join(", ")}
        </span>
      </span>
      <h2
        className="pad-top-300 pad-bottom-500 text-transform-capitalize"
        data-tina-field={tinaField(postData, "title")}
      >
        {postData?.title}
      </h2>
      <div data-tina-field={tinaField(postData, "body")}>
        <TinaMarkdown
          content={postData.body}
          components={{
            a: (props) => (
              <a rel="nofollow" target="_blank" {...props} href={props.url} />
            ),
          }}
        />
      </div>
      {postData.downloads && (
        <div className="pad-top-800 pad-bottom-800">
          <DownloadPDFs downloads={postData.downloads} />
        </div>
      )}

      {postData.relatedResources && (
        <ListPosts
          postListDetails={{
            title: "Related resources",
            items: postData.relatedResources.map(
              (relatedResources) => relatedResources.post
            ),
          }}
          anchor="#related-resources"
        />
      )}
    </div>
  );
};
