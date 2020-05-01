import React, { useState } from "react";
import { IonCheckbox } from "@ionic/react";

export const ItemCheckbox: React.FC = () => {
  return (
    <IonCheckbox mode="ios" color="tertiary" slot="start" disabled={false} />
  );
};
