import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from '../pages/list';

export default function Router() {
    return(
        <BrowserRouter>
          <Switch />
            <Route exact path="/" component={List}/>
        </BrowserRouter>
    )
}