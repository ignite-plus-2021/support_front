import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Permanent from "../src/components/layout/newlayout";

export const App = () => {
  return (
    <BrowserRouter>
   
        <Permanent/>
    </BrowserRouter>
  );
};
export default App;
