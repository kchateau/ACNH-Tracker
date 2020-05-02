import React, { useState } from "react";

import {
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCheckbox,
} from "@ionic/react";
import { InfoButtonPopover } from "./InfoButtonPopover";

import { bugPics } from "../assets/pictureModule";
import { ItemCheckbox } from "./ItemCheckbox";

let listOfItems: Item[] = [];
// const listOfSearchedItems: Item[] = [];

type Item = {
  name: string;
  price: number;
  time: string;
};

type ItemList = {
  list: Array<Item>;
};

export const ListContents: React.FC<ItemList> = (props) => {
  return (
    <IonList inset={true}>
      {props.list.map(
        (element: { price: number; name: string; time: string }) => {
          listOfItems.push(element);
          return (
            <IonItem key={element.name}>
              <IonAvatar>
                <img src={bugPics[element.name]} alt="" />
              </IonAvatar>
              <InfoButtonPopover
                price={element.price}
                time={element.time}
                name={element.name}
              ></InfoButtonPopover>
              <IonLabel>{element.name}</IonLabel>
              <ItemCheckbox></ItemCheckbox>
            </IonItem>
          );
        }
      )}
    </IonList>
  );
};
