import data from "./data.json";
import FeaturedImages from "./components/FeaturedImages/FeaturedImages";
import LastImages from "./components/LastImages/LastImages";


function App() {
  const filteredDataByRating = data.sort((a, b) => b.rating - a.rating).slice(0, 5);

  const filteredDataByAge = data.sort((a, b) => a.age - b.age).slice(0, 2);

  const dataLength = data.length;
  console.log(`Data length: ${dataLength}`);

  const groupedByTag = data.map(el => el.tags)
                           .flat()
                           .reduce((obj, el) => {
                              const count = obj[el] || 0;
                              return {
                                ...obj,
                                [el] : count + 1,
                              }
                            },{}
                          );

  console.log("Elements grouped by tags:", groupedByTag);

  const groupedByTagLength = data.map(el => el.tags)
                                 .flat()
                                 .reduce((obj, el) => {
                                    const count = obj[el.length] || 0;
                                      return {
                                        ...obj,
                                        [el.length] : count + 1,
                                      }
                                    },{}
                                  );

  console.log("Elements grouped by tag length:", groupedByTagLength);

  return (
    <>
      <FeaturedImages filteredDataByRating={filteredDataByRating}/>
      <LastImages filteredDataByAge={filteredDataByAge} />
    </>
  );
}

export default App;
