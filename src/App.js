import "./App.css";
import Header from "./COMPONENT/HEADER/Header";
import Section from "./COMPONENT/SECTION/section";
import { Sectiongrid, SecondGrid } from "./COMPONENT/SECTION/Sectiongrid";
import AfterGridSection from "./COMPONENT/SECTION/AfterGridSection";
import Social from "./COMPONENT/FOOTER/Social";
import Endlist from "./COMPONENT/FOOTER/Endlist";
// import AllMicrosoftContent from "./COMPONENT/HEADER/AllMicrosoftContent";
function App() {
  return (
    <div>
      <div className="headerspan">
        <Header />
      </div>
      <div className="sectionspan">
        <Section />
        <Sectiongrid />
        <AfterGridSection />
        <SecondGrid />
        <Social />
        <Endlist/>
        {/* <AllMicrosoftContent /> */}
      </div>
    </div>
  );
}

export default App;
