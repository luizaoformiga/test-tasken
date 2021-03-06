import { BrowserRouter, Route, Switch } from "react-router-dom";
import { List } from "../pages";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch />
      <Route exact path="/" component={List} />
    </BrowserRouter>
  );
};

