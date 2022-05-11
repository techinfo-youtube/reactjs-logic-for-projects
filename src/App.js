import { useState, useEffect } from "react";
import Pages from "./components/Pages";

function App() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  //getting posts
  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    paginationFunc();
  }, []);
  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round" />
          </label>
          <label className="switch-label">{darkMode ? "Dark" : "Light"}</label>
        </div>
        {data && data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}
      </div>
    </>
  );
}

export default App;
