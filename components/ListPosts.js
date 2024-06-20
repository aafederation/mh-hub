import { ResourceItemCard } from "./ResourceItemCard";

export const ListPosts = ({ postListDetails, anchor }) => {
  return (
    <div className="pad-top-1000 pad-bottom-700">
      <h2 className="text-transform-uppercase pad-bottom-500" id={anchor}>
        {postListDetails.title}
      </h2>
      <div className="display-grid grid-3up justify-items-center align-items-start column-gap-3rem row-gap-2rem">
        {postListDetails.items.map((item, i) => (
          <ResourceItemCard resource={item} key={i} />
        ))}
      </div>
    </div>
  );
};
