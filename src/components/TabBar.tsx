import React from "react";
import { IonTabBar, IonTabButton, IonIcon } from "@ionic/react";
import { bug, boat, colorPalette, paw } from "ionicons/icons";

export const TabBar: React.FC = () => (
  <IonTabBar>
    <IonTabButton tab="bugtab" href="/bugs">
      <IonIcon icon={bug} color="secondary"></IonIcon>
    </IonTabButton>
    <IonTabButton tab="fishtab" href="/fish">
      <IonIcon icon={boat} color="secondary"></IonIcon>
    </IonTabButton>
    <IonTabButton tab="fossiltab" href="/fossils">
      <IonIcon icon={paw} color="secondary"></IonIcon>
    </IonTabButton>
    <IonTabButton>
      <IonIcon icon={colorPalette} color="secondary"></IonIcon>
    </IonTabButton>
  </IonTabBar>
);
