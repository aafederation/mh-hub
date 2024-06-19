import { LandingCategory } from "./LandingCategory";
import { ResourceCard } from "./ResourceCard";
import postCategory from "@/tina/collections/postCategory";

export const MainBody = ({ homeData, posts }) => {
  const postsByCategory = posts.reduce((accumulator, currentValue) => {
    const currentCat = currentValue.node.category;
    if (!accumulator[currentCat]) {
      accumulator[currentCat] = [];
    }
    accumulator[currentCat].push(currentValue);
    return accumulator;
  }, {});

  return (
    <>
      <div className="mhd-tiles">
        {homeData.resources.map((resource, i) => (
          <ResourceCard resource={resource} key={i} />
        ))}
      </div>

      {postCategory.map((category, i) => {
        if (postsByCategory[category.value])
          return (
            <LandingCategory
              categoryDetails={{
                title: category.display,
                items: postsByCategory[category.value],
              }}
              key={i}
            />
          );
      })}
    </>
  );
};
