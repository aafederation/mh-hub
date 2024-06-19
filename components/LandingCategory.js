import { ResourceItemCard } from "./ResourceItemCard";

export const LandingCategory = ({ categoryDetails, anchor }) => {
  return (
    <>
      <h2
        className="pad-left-500 gap-top-500 text-transform-uppercase"
        id={anchor}
      >
        {categoryDetails.title}
      </h2>
      <div className="display-grid grid-3up justify-items-center align-items-start">
        {categoryDetails.items.map((resource, i) => (
          <ResourceItemCard resource={resource.node} key={i} />
        ))}
      </div>
    </>
  );
};
