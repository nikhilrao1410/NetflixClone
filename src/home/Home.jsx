import Navbar from "../components/Navbar/Navbar"
import Featured from "../components/Navbar/featured/Featured"
import List from "../components/list/List";
import "./home.scss"


const Home = () => {
  return (
    <div className="home">
     <Navbar/>
    <Featured/>
    <List/>
    <List/>
    <List/>
    <List/>
    </div>
  );
};

export default Home;