import Image from "next/image";

export const ResourceItemCard = ({ resource }) => {
  return (
    <>
      <section className="card-resource-item [ pad-top-500 pad-bottom-500 pad-left-600 pad-right-600 ]">
        <div className="member_img display-grid">
          <Image
            src="/img/blank.svg"
            alt="our_team"
            width={300}
            height={300}
            className="display-grid-row-1-20"
          />
          <div className="display-grid-row-18-20">
            <span className="resource-type-display gap-left-300 gap-bottom-300">
              {resource.type}
            </span>
          </div>
        </div>
        <span className="date">{resource.date}</span>
        <h3 className="pad-top-300">{resource.title}</h3>
        <span className="tag pad-top-300">Tag: {resource.tags.join(", ")}</span>
        <p className="pad-top-300">{resource.summary}</p>
      </section>
    </>
  );
};
