import React, { useState } from "react";

import {
  IonList,
  IonCol,
  IonItem,
  IonLabel,
  IonImg,
  IonAvatar,
} from "@ionic/react";
import { ItemCheckbox } from "./ItemCheckbox";
import { InfoButtonPopover } from "./InfoButtonPopover";

import { bugPics } from "../assets/pictureModule";

let listOfItems: Item[] = [];
const listOfSearchedItems: Item[] = [];

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
        (element: {
          price: number;
          name: string;
          time: string;
        }) => {
          listOfItems.push(element);
          return (
            <IonCol size="4">
              <IonItem>
                <ItemCheckbox></ItemCheckbox>
                {/* /Users/Kendra/Desktop/acnh-ionic-react/acnh-tracker/src/assets/bugPics/common_butterfly.png */}
                <IonAvatar>
                  <img src={bugPics[element.name]} />
                </IonAvatar>
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
