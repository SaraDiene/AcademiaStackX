import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UIComponents from "../components/UIComponents";
import PlanAndPrices from "../components/planAndPrices";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={UIComponents} />

        {/* <Route path="/about" exact component={About} /> */}
        <Route path="/planAndPrices" exact component={PlanAndPrices} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
