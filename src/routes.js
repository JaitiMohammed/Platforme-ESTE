import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/index";
import Register from "./Components/Signup/index";
import LoginProf from "./Components/Login/loginprof";
import RegisterProf from "./Components/Signup/registerProf";
import RegisterStudent from "./Components/Signup/registerEtudiant";
import AlertPages from "./Components/alert/pages/alertPages";
import Dashboardstudent from "./Components/dashboard/dashEtudiant";
import DashboardProf from "./Components/dashboard/dashProf";
import LoginStudent from "./Components/Login/loginetudiant";
import LoginSerivces from "./Components/Login/index";
import LoginAdmin from "./Components/Login/loginadmin";
import DashAdmin from "./Components/dashboard/dashAdmin";
import gererFiliers from "./Components/dashboard/featuresAdmin/gererFilieres";
import gererStudents from "./Components/dashboard/featuresAdmin/gererStudents";
import gererProfs from './Components/dashboard/featuresAdmin/listProfessor';
import showNotes from "./Components/dashboard/featuresStudents/show_notes";
import showEmploi from "./Components/dashboard/featuresStudents/show_emploi";
import addAbsences from "./Components/dashboard/featuresProfs/add_absence";
import addNotes from "./Components/dashboard/featuresProfs/add_notes";
import Details from './Components/dashboard/featuresAdmin/filiereAffecter';
import { Redirect } from "react-router-dom";
import { PrivateRouteProf } from "./Components/private-route/PrivateRouteProf";
import { PrivateRouteStudent } from "./Components/private-route/PrivateRouteStudent";
import { PrivateRouteAdmin } from "./Components/private-route/PrivateRouteAdmin";


const routes = () => (
  <div>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/loginProf" component={LoginProf} />
      <Route path="/registerService" component={AlertPages} />
      <Route path="/loginServices" component={LoginSerivces} />
      <Route path="/loginService" component={AlertPages} />
      <Route path="/loginAdmin" component={LoginAdmin} />
      <Route path="/loginEtudiant" component={LoginStudent} />
      <Route path="/registerProf" component={RegisterProf} />
      <Route path="/registerEtudiant" component={RegisterStudent} />

      <PrivateRouteAdmin exact path="/dashAdmin" component={DashAdmin} />
      <PrivateRouteAdmin path="/dashAdmin/Filieres" component={gererFiliers} />
      <PrivateRouteAdmin exact path="/dashAdmin/Professors" component={gererProfs} />
      <PrivateRouteAdmin path="/dashAdmin/Professors/Details/:id" component={Details} />
      <PrivateRouteAdmin path="/dashAdmin/Students/:id" component={gererStudents}/>
      <PrivateRouteProf exact path="/dashProf" component={DashboardProf} />
      <PrivateRouteProf path="/dashProf/addAbsences" component={addAbsences} />
      <PrivateRouteProf path="/dashProf/addNotes" component={addNotes} />
      <PrivateRouteStudent
        exact
        path="/dashStudent"
        component={Dashboardstudent}
      />
      <PrivateRouteStudent
        path="/dashStudent/showNotes"
        component={showNotes}
      />
      <PrivateRouteStudent
        path="/dashStudent/showEmploi"
        component={showEmploi}
      />
      <Redirect from="/" to="/Home" />
    </Switch>
  </div>
);
export default routes;
