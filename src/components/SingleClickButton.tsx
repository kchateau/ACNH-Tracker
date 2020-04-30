import React, { useState } from "react";

import { IonButton, IonIcon, IonContent } from "@ionic/react";

export const SingleClickButton: React.FC = () => {
  const [disableButton, setDisableButton] = useState(false);

  return (
    <IonButton
      slot="start"
      disabled={disableButton}
      color="success"
      onClick={() => {
        setDisableButton(true);
      }}
    >
      Caught
    </IonButton>
  );
};
