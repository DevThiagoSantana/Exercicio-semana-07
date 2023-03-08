import PropTypes from "prop-types";
import "./CourseCard.css";

function CourseCard({ imageUrl, name, category, description, duration }) {
  return (
    <div className="courseCardContainer">
      <div className="courseCardHeader">
        {imageUrl && <img src={imageUrl} alt={`Imagem curso ${name}`} />}
        <h3>{name}</h3>
      </div>
      <p>{duration} h</p>
      <p>{description}</p>
    </div>
  );
}

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
};

export default CourseCard;