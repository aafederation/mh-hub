import { ResourceItemCard } from "./ResourceItemCard";
import { sortItemsByPriorityAndDate } from "@/lib/utilities";

export const ListPosts = ({ postListDetails, anchor }) => {
  return (
    <div className="pad-top-1000 pad-bottom-700 pad-left-300 pad-right-300">
      <h2
        className="text-transform-uppercase pad-bottom-800"
        id={anchor}
        style={{ fontSize: "29px" }}
      >
        {postListDetails.title}
      </h2>
      <div className="display-grid grid-3up justify-items-center align-items-start column-gap-3rem row-gap-4rem">
        {postListDetails.items
          .sort(sortItemsByPriorityAndDate)
          .map((item, i) => {
            if (item) return <ResourceItemCard resource={item} key={i} />;
          })}
      </div>
    </div>
  );
};
