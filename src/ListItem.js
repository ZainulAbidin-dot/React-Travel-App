import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
// import img1 from "./img/pexels-1.jpg";

const ListItem = ({ post }) => {
  return (
    <ul>
      {post.map((items) => (
        <li key={items.id}>
          <div className="image">
            <img src={items.imageUrl} alt="" />
          </div>
          <div className="content">
            <p className="location">
              <FaMapMarkerAlt style={{ color: "crimson" }} /> {items.location}{" "}
              <a href={items.googleMapsUrl}>Visit Google Maps</a>
            </p>
            <h1 className="mainHeading">{items.title}</h1>
            <p>
              {items.startDate} - {items.endDate}
            </p>
            <p className="description">{items.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
