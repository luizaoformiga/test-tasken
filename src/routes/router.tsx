import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "../pages/list";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch />
      <Route exact path="/" component={List} />
    </BrowserRouter>
  );
};

export default Router;
