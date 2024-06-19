import { ResourceItemCard } from "./ResourceItemCard";

export const LandingCategory = ({ categoryDetails, anchor }) => {
  return (
    <>
      <h2
        className="pad-left-800 gap-top-500 text-transform-uppercase"
        id={anchor}
      >
        {categoryDetails.title}
      </h2>
      <div className="mhd-tiles">
        {categoryDetails.items.map((resource, i) => (
          <ResourceItemCard resource={resource.node} key={i} />
        ))}
      </div>
    </>
  );
};
