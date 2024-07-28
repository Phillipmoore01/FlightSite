import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from './pages/Homepage';
import { NotFound } from './pages/NotFound';
export const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/">
                    <Homepage />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}