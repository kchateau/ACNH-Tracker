import React from "react";
import { IonTabBar, IonTabButton, IonIcon } from "@ionic/react";
import {
  bugOutline,
  boatOutline,
  colorPaletteOutline,
  pawOutline,
} from "ionicons/icons";

export const TabBar: React.FC = () => (
  <IonTabBar>
    <IonTabButton tab="bugtab" href="/bugs">
      <IonIcon icon={bugOutline} color="medium"></IonIcon>
    </IonTabButton>
    <IonTabButton tab="fishtab" href="/fish">
      <IonIcon icon={boatOutline} color="medium"></IonIcon>
    </IonTabButton>
    <IonTabButton tab="fossiltab" href="/fossils">
      <IonIcon icon={pawOutline} color="medium"></IonIcon>
    </IonTabButton>
    <IonTabButton>
      <IonIcon icon={colorPaletteOutline} color="medium"></IonIcon>
    </IonTabButton>
  </IonTabBar>
);
