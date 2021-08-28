import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "../src/components/layout/Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};
export default App;
