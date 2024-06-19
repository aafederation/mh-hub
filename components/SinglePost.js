import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export const SinglePost = ({ postData }) => {
  return (
    <section className="card-resource-item [ pad-top-500 pad-bottom-500 pad-left-600 pad-right-600 ]">
      <div
        className="member_img display-grid"
        data-tina-field={tinaField(postData, "image")}
      >
        <Image
          src={postData?.image?.length > 1 ? postData.image : "/img/blank.svg"}
          alt="our_team"
          width={300}
          height={300}
          className="display-grid-row-1-20"
        />
        <div
          className="display-grid-row-18-20"
          data-tina-field={tinaField(postData, "typeOfResource")}
        >
          <span className="resource-type-display gap-left-300 gap-bottom-300">
            {postData?.typeOfResource}
          </span>
        </div>
      </div>
      <span className="date" data-tina-field={tinaField(postData, "date")}>
        {new Date(postData?.date).toLocaleDateString("en-us", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </span>
      <h3
        className="pad-top-300 text-transform-capitalize"
        data-tina-field={tinaField(postData, "title")}
      >
        {postData.type === "link" ? (
          <a href={postData?.linkUrl} target="_blank" rel="noopener noreferrer">
            {postData?.title}
          </a>
        ) : (
          <a href={`/post/${postData._sys.filename}`}>{postData?.title}</a>
        )}
      </h3>
      <span
        className="tag pad-top-300"
        data-tina-field={tinaField(postData, "tags")}
      >
        Tag: {postData?.tags?.join(", ")}
      </span>
      <p
        className="pad-top-300"
        data-tina-field={tinaField(postData, "summary")}
      >
        {postData?.summary}
      </p>
    </section>
  );
};
