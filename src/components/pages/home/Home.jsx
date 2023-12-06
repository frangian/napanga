import "./home.css";
import home from "../../../assets/napanga_home.jpg";
// import napangaImage from "../../../assets/napanga_home.jpg"

const Home = () => {
  return (
    <div
      className="home-container"
      // style={{
      //   height: "1000px",
      //   width: "1000px",
      //   backgroundImage: `url(${home})`,
      // }}
    >
      <img style={{ width: '100%', height:"100vh" }} src={home} alt="home-image" />
    </div>
  );
};

export default Home;
