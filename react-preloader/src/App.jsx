import "./App.css";
import Loader from "./components/loader";

function App() {
  return (
    <>
      <Loader loaderSize="small" />
      <Loader loaderSize="medium" />
      <Loader loaderSize="large" />
    </>
  );
}

export default App;
