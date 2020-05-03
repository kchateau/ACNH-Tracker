import React, { useState } from "react";

import { IonContent, IonSearchbar } from "@ionic/react";

import { ListContents } from "./ListContents";
import { IHash } from "../assets/pictureModule";

let listOfItems: Item[] = [];
let listOfSearchedItems: Item[] = [];

type Item = {
  name: string;
  price: number;
  time: string;
};

type ItemList = {
  list: Array<Item>;
  picList: IHash;
};

export const ItemGrid: React.FC<ItemList> = (props) => {
  listOfItems = props.list;

  const moveItemToEnd = (value: any) => {
    listOfItems.push(
      listOfItems.splice(findElementByName(value["detail"]["value"]), 1)[0]
    );
    buildContents();
  };

  const [searchText, setSearchText] = useState("");
  const [listContents, setListContents] = useState(
    <ListContents
      list={listOfItems}
      checkItem={moveItemToEnd}
      picList={props.picList}
    ></ListContents>
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
    if (listOfSearchedItems.length !== 0) {
      setListContents(
        <ListContents
          list={listOfSearchedItems}
          checkItem={moveItemToEnd}
          picList={props.picList}
        ></ListContents>
      );
    } else {
      setListContents(
        <ListContents
          list={listOfItems}
          checkItem={moveItemToEnd}
          picList={props.picList}
        ></ListContents>
      );
    }
  }

  function findElementByName(name: string) {
    let index = -1;
    listOfItems.forEach((e, i) => {
      if (e.name === name) {
        index = i;
      }
    });

    return index;
  }
};
