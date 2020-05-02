import React, { useState } from "react";

import { IonContent, IonSearchbar } from "@ionic/react";

import { ListContents } from "./ListContents";

let listOfItems: Item[] = [];
let listOfSearchedItems: Item[] = [];

type Item = {
  name: string;
  price: number;
  time: string;
};

type ItemList = {
  list: Array<Item>;
};

export const ItemGrid: React.FC<ItemList> = (props) => {
  listOfItems = props.list;

  const [searchText, setSearchText] = useState("");
  const [listContents, setListContents] = useState(
    <ListContents list={listOfItems}></ListContents>
  );

  return (
    <IonContent>
      <IonSearchbar
        autocomplete="on"
        value={searchText}
        onIonChange={(e) => {
          setSearchText(e.detail.value!);
          handleInput(e);
        }}
      ></IonSearchbar>
      {listContents}
    </IonContent>
  );
  function handleInput(value: any) {
    console.log(value);
    listOfSearchedItems = [];
    listOfItems.forEach((item) => {
      if (
        item.name.toLowerCase().includes(value["detail"]["value"].toLowerCase())
      ) {
        listOfSearchedItems.push(item);
      }
    });
    buildContents();
  }

  function buildContents() {
    console.log("built contents");
    console.log(listOfSearchedItems);
    if (listOfSearchedItems.length != 0) {
      setListContents(<ListContents list={listOfSearchedItems}></ListContents>);
    }
  }
};
