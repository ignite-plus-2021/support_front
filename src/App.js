import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "../src/components/layout/Layout";
import newlayout from "../src/components/layout/newlayout";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      {/* <newlayout/> */}
    </BrowserRouter>
  );
};
export default App;
