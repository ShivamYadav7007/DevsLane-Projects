import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConfirmationPage from "./Components/ConfirmationPage/ConfirmationPage";
import Home from "./Components/Home/Home";
import User from "./Components/UserDataUsingAPI/User";

interface Props {}

const App: React.FC<Props> = (props) => {
  const [isDialogOpen, setisDialogOpen] = useState(false);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="mt-5 text-2xl font-bold text-center text-red-500">
              Devslane HomeWork Directions (click to route)
            </div>
            <Home title="Confirmation Dialog Page" path="/dialog" />
            <Home title="User Data using RandomUser API" path="/userdata" />
          </Route>
          <Route exact path="/dialog">
            <ConfirmationPage
              open={isDialogOpen}
              onClose={setisDialogOpen}
              title="Please Confirm!"
              buttonText1="Accept"
              buttonText2="Abort"
            >
              <p>
                Click on <span className="font-semibold">Accept</span> to put
                all dollars in your pocket Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Corporis, molestiae!
              </p>
            </ConfirmationPage>
          </Route>
          <Route exact path="/userdata">
            <User />
          </Route>
          <Route path="*">
            <div>Page Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

App.defaultProps = {};

export default React.memo(App);
