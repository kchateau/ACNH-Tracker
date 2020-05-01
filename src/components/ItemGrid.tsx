import React, { useState } from "react";
import useForceUpdate from "use-force-update";

import {
  IonList,
  IonCol,
  IonLabel,
  IonContent,
  IonItem,
  IonSearchbar,
} from "@ionic/react";

import { ListContents } from "./ListContents";

let listOfItems: Item[] = [];
const listOfSearchedItems: Item[] = [];
let listContents: any;

type Item = {
  name: String;
  price: number;
  time: String;
};

type ItemList = {
  list: Array<Item>;
};

export const ItemGrid: React.FC<ItemList> = (props) => {
  const forceUpdate = useForceUpdate();

  buildContents();
  const [searchText, setSearchText] = useState("");
  listOfItems = props.list;

  return (
    <IonContent>
      <IonSearchbar value={searchText} onIonChange={handleInput}></IonSearchbar>
      {listContents}
    </IonContent>
  );
  function handleInput(value: any) {
    console.log(value);
    listOfItems.forEach((item) => {
      if (item.name.includes(value["detail"]["value"])) {
        listOfSearchedItems.push(item);
      }
    });
    buildContents();
    forceUpdate();
  }

  function buildContents() {
    console.log("built contents");
    if (listOfSearchedItems.length == 0) {
      listContents = <ListContents list={listOfItems}></ListContents>;
    } else {
      console.log("got here");
      listContents = <ListContents list={listOfSearchedItems}></ListContents>;
    }
    console.log("List contents:");
    console.log(listContents);
  }
};
