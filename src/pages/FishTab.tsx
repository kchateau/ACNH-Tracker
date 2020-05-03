import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ItemGrid } from "../components/ItemGrid";
import { fishPics } from "../assets/pictureModule";

var fishList = require("../assets/fish.json");
const FishTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Fish</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ItemGrid list={fishList} picList={fishPics}></ItemGrid>
      </IonContent>
    </IonPage>
  );
};

export default FishTab;
