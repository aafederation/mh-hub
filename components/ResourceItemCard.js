import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import globalValues from "@/content/globals/global-values.json";

export const ResourceItemCard = ({ resource }) => {
  return (
    <section className="card-resource-item">
      <div
        className="member_img display-grid"
        data-tina-field={tinaField(resource, "image")}
      >
        <Image
          src={resource?.image?.length > 1 ? resource.image : "/img/blank.svg"}
          alt="our_team"
          width={300}
          height={300}
          className="display-grid-row-1-20"
        />
        <div
          className="display-grid-row-18-20"
          data-tina-field={tinaField(resource, "typeOfResource")}
        >
          <span className="resource-type-display gap-left-300 gap-bottom-300">
            {resource?.typeOfResource}
          </span>
        </div>
      </div>
      <span className="date" data-tina-field={tinaField(resource, "date")}>
        {new Date(resource?.date).toLocaleDateString("en-us", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </span>
      <h3
        className="pad-top-300 text-transform-capitalize"
        data-tina-field={tinaField(resource, "title")}
      >
        {resource.type === "link" ? (
          <a href={resource?.linkUrl} target="_blank" rel="noopener noreferrer">
            {resource?.title}
          </a>
        ) : (
          <a href={`/post/${resource._sys.filename}`}>{resource?.title}</a>
        )}
      </h3>
      <span
        className="tag pad-top-300"
        data-tina-field={tinaField(resource, "tags")}
      >
        Tags:{" "}
        {resource?.tags
          ?.map(
            (tagValue) =>
              globalValues.tags.find((tag) => tag.value === tagValue).label
          )
          .join(", ")}
      </span>
      <p
        className="pad-top-300"
        data-tina-field={tinaField(resource, "summary")}
      >
        {resource?.summary}
      </p>
    </section>
  );
};
