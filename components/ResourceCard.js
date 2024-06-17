export const ResourceCard = ({ resource }) => {
  return (
    <>
      <section className="card-resource [ pad-top-500 pad-bottom-500 pad-left-600 pad-right-600 ]">
        <img src={resource.icon} alt="icon" />
        <h3 className="pad-top-500 text-transform-uppercase">
          {resource.label}
        </h3>
        <p className="pad-top-300">{resource.description}</p>
        <div className="gap-top-500">
          <a className="classic-red-button" href={resource.button.link}>
            {resource.button.label}
          </a>
        </div>
      </section>
    </>
  );
};
