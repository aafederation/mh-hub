import { tinaField } from "tinacms/dist/react";

export const PostHero = ({ homeData }) => {
  return (
    <article
      className="[ bg-img-vector ] [ nav-grid-hero ]"
      data-tina-field={tinaField(homeData, "image")}
      style={{ backgroundImage: `url(${homeData.image})` }}
    >
      <div className="[ center-text-section ] [ flow wrapper ] [ overlay ] ">
        <div
          className="text-800 font-serif weight-black color-white text-transform-uppercase"
          data-tina-field={tinaField(homeData, "heading")}
        >
          {homeData.heading}
        </div>
        <div
          className="text-500 md:text-600 weight-bold color-white"
          data-tina-field={tinaField(homeData, "subHeading")}
        >
          {homeData.subHeading}
        </div>
      </div>
    </article>
  );
};
