import React from "react";

const Event = (props: any) => {
  const { item } = props;
  const { title, lead, img, bands, best } = item;

  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p className="lead">{lead}</p>
        {bands && (
          <p>
            <strong>Förband: </strong>
            {bands.join(", ")}
          </p>
        )}
        {best && (
          <p>
            <strong>Personliga höjdpunkter: </strong>
            {best.join(", ")}
          </p>
        )}
      </div>
      <figure>
        {img && <img src={img} alt="poster" />}
        {!img && <span className="no-poster">Ingen affisch</span>}
      </figure>
    </article>
  );
};

export default Event;
