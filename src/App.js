import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import "./App.css";
import NewsCard from "./components/NewsCard";
import Search from "./components/Search";

function App() {
  return (
    <div className="main">
      <div className="grid ">
        <div className="col-6 col-offset-3 header">
          <span>News Today</span>
        </div>
        <div className="col-6 col-offset-3">
          <Search />
        </div>
        <div className="col-6 col-offset-3">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

export default App;
