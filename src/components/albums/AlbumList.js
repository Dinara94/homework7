import React, { useEffect, useState } from "react";
import useData from "../services/useData";
import Album from "./Album";

import "./AlbumList";

export default function AlbumList() {
    const { albums } = useData();

  return (
    <div className="wrapper">
      <h1 className="title">All albums</h1>
      <ul className="container">
        {albums.map((item) => (
          <Album key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
