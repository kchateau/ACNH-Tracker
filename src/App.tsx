import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
// import Home from "./pages/Home";

import BugTab from "./pages/BugTab";
import FishTab from "./pages/FishTab";
import FossilTab from "./pages/FossilTab";
import ArtTab from "./pages/ArtTab";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { TabBar } from "./components/TabBar";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/bugs" component={BugTab} exact={true} />
        <Route path="/fish" component={FishTab} exact={true} />
        <Route path="/fossils" component={FossilTab} />
        <Route path="/art" component={ArtTab} exact={true} />

        <Route path="/" render={() => <Redirect to="/bugtab" />} exact={true} />
      </IonRouterOutlet>
      <TabBar></TabBar>
    </IonReactRouter>
  </IonApp>
);

export default App;
