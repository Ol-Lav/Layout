import './LastImages.scss';

function LastImages({filteredDataByAge}) {

  return (
    <div className="lastImages">
      <h1 className="lastImages__title">
        Last Images
      </h1>
      <div className="lastImages__container">
        {filteredDataByAge.map(el => {
          return (
            <div
              className="lastImages__item"
              key={el.id}
            >
              <img
                src={el.image}
                alt={`${el.title} #${el.tags.join(' #')}`}
                className="lastImages__img"
              />
              <div className="lastImages__text-container">
                <h2 className="lastImages__text">
                  {el.title}
                </h2>
                <p className="lastImages__tags">
                  #{el.tags.join(' #')}
                </p>
              </div>
            </div>
           )
          })
        }
        <h3 className="lastImages__item lastImages__item-extra">
            Banner
        </h3>
      </div>
    </div>
  )
}

export default LastImages;
