import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ItemGrid } from "../components/ItemGrid";
// import { SearchBar } from "../components/SearchBar";

var bugList = require("../assets/bugs.json");

const BugTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bugs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ItemGrid list={bugList}></ItemGrid>
      </IonContent>
    </IonPage>
  );
};

export default BugTab;
