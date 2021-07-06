import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ConfirmationPage from "./Components/ConfirmationPage/ConfirmationPage";

interface Props {}

const App: React.FC<Props> = (props) => {
  const [isDialogOpen, setisDialogOpen] = useState(false);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/confirmation">
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
        </Switch>
      </Router>
    </div>
  );
};

App.defaultProps = {};

export default React.memo(App);
