import "./App.css";
import ButtonComponent from "./components/ButtonFunction";
import Cat from "./components/Cat";
import ImgComponent from "./components/ImgFunction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent content="First Button"></ButtonComponent>
        <div style={{ width: "500px", height: "500px" }}>
          <ImgComponent
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F05%2F12170411%2Fcat-kitten-138468381.jpg&q=60"
            alt="kitten"
          />
        </div>
        <Cat />
      </header>
    </div>
  );
}

export default App;
