 import './FeaturedImages.scss';

 function FeaturedImages({filteredDataByRating}) {
   const extraImages = filteredDataByRating.slice(3);

   return (
    <div className="featuredImages">
      <h1 className="featuredImages__title">
        Featured Images
      </h1>
      <div className="featuredImages__container">
        {filteredDataByRating.map(el => {
          return (
            <div className={
              `featuredImages__item
              ${extraImages.includes(el)
                ? "featuredImages__item-extra"
                : ""
              }
              ${filteredDataByRating.indexOf(el) === 0
                ? "featuredImages__img-first"
                : ""
              }`
            }
              key={el.id}
            >
            <img
              src={el.image}
              alt={`${el.title} #${el.tags.join(' #')}`}
              className="featuredImages__img"
            />
              <div className="featuredImages__text-container">
                <h2 className="featuredImages__text">
                  {el.title}
                </h2>
                <p className="featuredImages__tags">
                  #{el.tags.join(' #')}
                </p>
              </div>
            </div>
            )
          }
        )}
      </div>
    </div>
  )
}

 export default FeaturedImages;
