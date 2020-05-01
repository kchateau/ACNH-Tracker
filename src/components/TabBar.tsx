import React from "react";
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { bug, boat, colorPalette, paw } from "ionicons/icons";

export const TabBar: React.FC = () => (
  <IonTabBar slot="bottom" color="light">
    <IonTabButton tab="bugtab" href="/bugs">
      <IonLabel color="secondary">Bugs</IonLabel>
      <IonIcon icon={bug} color="secondary"></IonIcon>
    </IonTabButton>
    <IonTabButton tab="fishtab" href="/fish">
      <IonLabel color="secondary">Fish</IonLabel>

      <IonIcon icon={boat} color="secondary"></IonIcon>
    </IonTabButton>
    <IonTabButton tab="fossiltab" href="/fossils">
      <IonLabel color="secondary">Fossils</IonLabel>

      <IonIcon icon={paw} color="secondary"></IonIcon>
    </IonTabButton>
    <IonTabButton>
      <IonLabel color="secondary">Art</IonLabel>

      <IonIcon icon={colorPalette} color="secondary"></IonIcon>
    </IonTabButton>
  </IonTabBar>
);
