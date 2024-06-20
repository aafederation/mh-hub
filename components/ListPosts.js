import { ResourceItemCard } from "./ResourceItemCard";

export const ListPosts = ({ postListDetails, anchor }) => {
  return (
    <div className="pad-top-1000 pad-bottom-700">
      <h2 className="pad-left-500 text-transform-uppercase" id={anchor}>
        {postListDetails.title}
      </h2>
      <div className="display-grid grid-3up justify-items-center align-items-start">
        {postListDetails.items.map((resource, i) => (
          <ResourceItemCard resource={resource.node} key={i} />
        ))}
      </div>
    </div>
  );
};
