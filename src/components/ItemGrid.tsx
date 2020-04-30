import React, { useState } from "react";
import {
  IonList,
  IonRow,
  IonCol,
  IonLabel,
  IonPopover,
  IonButton,
  IonContent,
  IonIcon,
  IonItemSliding,
  IonAvatar,
  IonItem,
  IonItemOptions,
} from "@ionic/react";

import { informationCircle, trash } from "ionicons/icons";
import { InfoButtonPopover } from "./InfoButtonPopover";
import { SingleClickButton } from "./SingleClickButton";

type Item = {
  name: String;
  price: number;
  time: String;
};

type ItemList = {
  list: Array<Item>;
};

export const ItemGrid: React.FC<ItemList> = (props) => {
  // const [disableButton, setDisableButton] = useState(false);

  return (
    <IonContent>
      <IonList>
        {props.list.map(
          (element: { price: number; name: String; time: String }) => {
            return (
              <IonCol size="4">
                <IonItem>
                  <InfoButtonPopover
                    price={element.price}
                    time={element.time}
                    name={element.name}
                  ></InfoButtonPopover>
                  <IonLabel>{element.name}</IonLabel>
                  <SingleClickButton></SingleClickButton>
                </IonItem>
              </IonCol>
            );
          }
        )}
      </IonList>
    </IonContent>
  );
};
