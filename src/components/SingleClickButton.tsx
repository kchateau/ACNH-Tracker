import React, { useState } from "react";

import { IonButton, IonIcon, IonContent } from "@ionic/react";
import { checkmarkSharp } from "ionicons/icons";

export const SingleClickButton: React.FC = () => {
  const [disableButton, setDisableButton] = useState(false);

  return (
    <IonButton
      size="default"
      slot="start"
      disabled={disableButton}
      color="success"
      onClick={() => {
        setDisableButton(true);
      }}
    >
      <IonIcon slot="icon-only" icon={checkmarkSharp} />
    </IonButton>
  );
};
