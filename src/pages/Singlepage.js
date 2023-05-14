import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
// Context
import ShowsContext from "../context/shows/showsContext";
import Popup from "../components/Popup";
// Components
import Loader from "../components/Loader";

const Singlepage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  const {id} = useParams();
  useEffect(() => {
    getSingleShow(id);

  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1 className="singlename"><b>{singleShow.name}</b></h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "No offical site"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
            <button className="btn2" onClick={()=>setButtonPopup(true)}>Book Tickets</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h4>Ticket Booking</h4>
            </Popup>
          
          </div>
        </div>
      )}
    </>
  );
};

export default Singlepage;
