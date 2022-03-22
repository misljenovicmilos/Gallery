import { ReduxProvider } from "modules/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <ReduxProvider>
    <App />,
  </ReduxProvider>,
  document.getElementById("root")
);
