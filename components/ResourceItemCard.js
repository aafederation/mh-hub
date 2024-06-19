import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export const ResourceItemCard = ({ resource }) => {
  return (
    <>
      <section className="card-resource-item [ pad-top-500 pad-bottom-500 pad-left-600 pad-right-600 ]">
        <div
          className="member_img display-grid"
          data-tina-field={tinaField(resource, "image")}
        >
          <Image
            src={
              resource?.image?.length > 1 ? resource.image : "/img/blank.svg"
            }
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
          {resource?.date}
        </span>
        <h3
          className="pad-top-300"
          data-tina-field={tinaField(resource, "title")}
        >
          {resource?.title}
        </h3>
        <span
          className="tag pad-top-300"
          data-tina-field={tinaField(resource, "tags")}
        >
          Tag: {resource?.tags?.join(", ")}
        </span>
        <p
          className="pad-top-300"
          data-tina-field={tinaField(resource, "summary")}
        >
          {resource?.summary}
        </p>
      </section>
    </>
  );
};
