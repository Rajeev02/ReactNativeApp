import React from "react";

function MenuCard({ menuData }) {
  console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElement) => {
          const { id, name, category, image, description } = curElement;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtl">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtl">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default MenuCard;
