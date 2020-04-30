import React from "react";
import { IonTabBar, IonTabButton, IonLabel } from "@ionic/react";

export const TabBar: React.FC = () => (
  <IonTabBar>
    <IonTabButton tab="bugtab" href="/bugs">
      <IonLabel>Bugs</IonLabel>
    </IonTabButton>
    <IonTabButton tab="fishtab" href="/fish">
      <IonLabel>Fish</IonLabel>
    </IonTabButton>
    <IonTabButton tab="fossiltab" href="/fossils">
      <IonLabel>Fossils</IonLabel>
    </IonTabButton>
    <IonTabButton tab="arttab" href="/art">
      <IonLabel>Art</IonLabel>
    </IonTabButton>
  </IonTabBar>
);
