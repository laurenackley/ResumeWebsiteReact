import Education from "./Education";
import Exp from "./Exp";
import Technologies from "./Technologies";
const Home = () => {
  return (
    <div className="home">
        <h1 className="heading">Resume</h1>
        <br/>
      <Education />
      <br />
      <br />
      <Technologies />
      <br />
      <br />

      <Exp />
    </div>
  );
};
export default Home;
