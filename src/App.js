import { BrowserRouter } from "react-router-dom";
import DataTable from "./components/layout/DataTable";
import "./App.css";

import Permanent from "../src/components/layout/newlayout";

export const App = () => {
  return (
    <BrowserRouter>
              {/* <DataTable/> */}
        <Permanent/>

    </BrowserRouter>
  );
};
export default App;
