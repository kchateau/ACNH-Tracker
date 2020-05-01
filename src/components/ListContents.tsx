import React, { useState } from "react";

import { IonList, IonCol, IonItem, IonLabel } from "@ionic/react";
import { ItemCheckbox } from "./ItemCheckbox";
import { InfoButtonPopover } from "./InfoButtonPopover";

let listOfItems: Item[] = [];
const listOfSearchedItems: Item[] = [];

type Item = {
  name: String;
  price: number;
  time: String;
};

type ItemList = {
  list: Array<Item>;
};

export const ListContents: React.FC<ItemList> = (props) => {
  return (
    <IonList inset={true}>
      {props.list.map(
        (element: { price: number; name: String; time: String }) => {
          listOfItems.push(element);
          console.log("Added " + element.name + " to list");
          return (
            <IonCol size="4">
              <IonItem>
                <ItemCheckbox></ItemCheckbox>
                <InfoButtonPopover
                  price={element.price}
                  time={element.time}
                  name={element.name}
                ></InfoButtonPopover>
                <IonLabel>{element.name}</IonLabel>
              </IonItem>
            </IonCol>
          );
        }
      )}
    </IonList>
  );
};
