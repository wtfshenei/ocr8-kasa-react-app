import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import logements from "../../assets/logements.json";
import Rating from "../../components/Rating/Rating";
import Carousel from "../../components/Carousel/Carousel";

const Housing = ({ id }) => {
  const house = logements.find((house) => house.id === id);
  const tags = house.tags;
  const rating = house.rating;

  return (
    <div>
      <div className="housing-page">
        <Header />
        <div className="house-container">
          <Carousel pictures={house.pictures} />
          <div className="infos">
            <div className="location">
              <h2>{house.title}</h2>
              <p className="place">{house.location}</p>
              <div className="tags">
                {tags.map((tag, index) => (
                  <Tag key={`tag_${index}`} tag={tag} />
                ))}
              </div>
            </div>
            <div className="host">
              <div className="host-container">
                <img
                  className="portrait"
                  src={house.host.picture}
                  alt={house.host.name}
                />
                <p className="host-name">{house.host.name}</p>
              </div>
              <div className="rating">
                <Rating rating={rating} />
              </div>
            </div>
          </div>
          <div className="collapse-housing">
            <div className="collapse-display">
              <Collapse title="Description" desc={house.description} />
            </div>
            <div className="collapse-display">
              <Collapse title="Équipements" desc={house.equipments} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Housing;
