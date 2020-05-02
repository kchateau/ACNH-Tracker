import React, { useState } from "react";
import { IonCheckbox } from "@ionic/react";

export const ItemCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonCheckbox
      mode="ios"
      color="tertiary"
      slot="end"
      onIonChange={(e) => {
        setChecked(e.detail.checked);
        moveItemToEnd(e);
      }}
    />
  );
  function moveItemToEnd(value: any) {
    
  }
};
