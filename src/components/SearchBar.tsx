import React, { useState } from "react";
import { IonSearchbar } from "@ionic/react";

export const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonSearchbar
      value={searchText}
      onIonChange={(e) => setSearchText(e.detail.value!)}
    ></IonSearchbar>
  );
};
