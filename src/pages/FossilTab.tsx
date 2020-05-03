import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ItemGrid } from "../components/ItemGrid";
import { fossilPics } from "../assets/pictureModule";

// import ExploreContainer from "../components/ExploreContainer";

var fossilList = require("../assets/fossils.json");

const FossilTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Fossils</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ItemGrid list={fossilList} picList={fossilPics}></ItemGrid>
      </IonContent>
    </IonPage>
  );
};

export default FossilTab;
