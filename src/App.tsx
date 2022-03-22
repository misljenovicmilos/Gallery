import { Routing } from "pages/Routing";
import { BrowserRouter } from "react-router-dom";
import "css/app.css";
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
