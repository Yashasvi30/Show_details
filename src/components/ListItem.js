import { Link } from "react-router-dom";

const ListItem = ({ image, name, id }) => {
  return (
    <Link to={`/singleshow/${id}`} className="listitem">
      <img src={image} alt={name} />
      <div className="listitem__info">
      <h4 className="info__name">{name}</h4>
      </div>
    </Link>
  );
};

export default ListItem;