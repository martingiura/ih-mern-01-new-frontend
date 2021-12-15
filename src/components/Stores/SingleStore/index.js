// ./client/src/components/Guitars/single/index.js
import React, { useContext } from "react";
import StoreContext from "../../../context/Store/StoreContext";

import { useParams } from "react-router-dom";

export default function SingleStore() {
  const ctx = useContext(StoreContext);
  const { singleStore, getStore } = ctx;

  const params = useParams();
  const id = params.id;

  return (
    <div>
      Página individual de Store
      <button
        onClick={() => {
          getStore(id);
        }}
      >
        Obtener store individual
      </button>
      <h1>{singleStore.nombre}</h1>
      <p>{singleStore.descripcion}</p>
      <p>{singleStore.telefono}</p>
    </div>
  );
}
