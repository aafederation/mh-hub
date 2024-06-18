import postCategory from "@/tina/collections/postCategory";
import { tinaField } from "tinacms/dist/react";

export const ResourceCard = ({ resource }) => {
  return (
    <>
      <section className="card-resource [ pad-top-500 pad-bottom-500 pad-left-600 pad-right-600 ]">
        <img
          src={resource.icon}
          alt="icon"
          data-tina-field={tinaField(resource, "icon")}
        />
        <h3
          className="pad-top-500 text-transform-uppercase"
          data-tina-field={tinaField(resource, "category")}
        >
          {postCategory.find((cat) => cat.value === resource.category).label}
        </h3>
        <p
          className="pad-top-300"
          data-tina-field={tinaField(resource, "description")}
        >
          {resource.description}
        </p>
        <div
          className="gap-top-500"
          data-tina-field={tinaField(resource, "buttonLabel")}
        >
          <a className="classic-red-button" href={`#${resource.category}`}>
            {resource.buttonLabel}
          </a>
        </div>
      </section>
    </>
  );
};
