import "bootstrap/dist/css/bootstrap.min.css";
import LatestRelease from "./components/LatestRelease";
import MyNavBar from "./components/MyNavbar";
import "./App.css";

function App() {
  return (
    <>
      <MyNavBar home="Home" about="About" browse="Browse" />
      <LatestRelease />
      <MyNavBar
        home="Contact us"
        about="Find us"
        browse={new Date().toLocaleString() + ""}
      />
    </>
  );
}

export default App;
