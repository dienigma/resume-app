import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import LoginPage from "../components/LoginPage";
import ResumeApp from "../components/ResumeApp";
import NotFoundPage from "../components/NotFoundPage";
import EditEducationForm from "../components/EditEducationForm";
import EditAwards from "../components/EditAwards";
import EditExperience from "../components/EditExperience";
import EditSkills from "../components/EditSkills";
import EditProfile from "../components/EditProfile";
import EditCertifications from "../components/EditCertifications";

export const history = createHistory();

const IndexRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact={true} path="/" component={LoginPage} />
          <Route path="/resume" component={ResumeApp} />
          <Route path="/editEducation" component={EditEducationForm} />
          <Route path="/editAwards" component={EditAwards} />
          <Route path="/editExperience" component={EditExperience} />
          <Route path="/editSkills" component={EditSkills} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/editCertifications " component={EditCertifications} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default IndexRouter;
