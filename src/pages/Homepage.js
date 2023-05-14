import { useContext } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";

// Components
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
              }
              name={item.show.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
