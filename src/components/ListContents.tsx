import React, { useState } from "react";

import {
  IonList,
  IonCol,
  IonItem,
  IonLabel,
  IonImg,
  IonAvatar,
  IonCheckbox,
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
        (element: { price: number; name: string; time: string }) => {
          listOfItems.push(element);
          return (
            <IonCol>
              <IonItem>
                <IonAvatar>
                  <img src={bugPics[element.name]} />
                </IonAvatar>

                <InfoButtonPopover
                  price={element.price}
                  time={element.time}
                  name={element.name}
                ></InfoButtonPopover>
                <IonLabel>{element.name}</IonLabel>
                {/* <ItemCheckbox></ItemCheckbox> */}
                <IonCheckbox
                  mode="ios"
                  color="tertiary"
                  slot="end"
                  value={element.name}
                  disabled={false}
                />
              </IonItem>
            </IonCol>
          );
        }
      )}
    </IonList>
  );
};
