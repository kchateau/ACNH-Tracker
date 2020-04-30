import React, { useState, Props } from "react";
import {
  IonPopover,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { informationCircle } from "ionicons/icons";

type InfoButtonProps = {
  name: String;
  price: number;
  time: String;
};

export const InfoButtonPopover: React.FC<InfoButtonProps> = (props) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <IonButton fill="clear" slot="end" onClick={() => setShowPopover(true)}>
        <IonIcon slot="icon-only" icon={informationCircle} />
      </IonButton>
      <IonPopover
        isOpen={showPopover}
        onDidDismiss={(e) => setShowPopover(false)}
      >
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Price: {props.price}</IonCardSubtitle>
            <IonCardTitle>{props.name}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>Available time: {props.time}</IonCardContent>
        </IonCard>
      </IonPopover>
    </>
  );
};
