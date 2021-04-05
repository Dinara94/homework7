import React, { useEffect, useState } from "react";
import Axios from "axios";
import Album from "./Album";

import "../../App.css";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";

  useEffect(() => {
    Axios.get(ALBUMS_URL).then((resp) => {
      const albums = resp.data;
      setAlbums(albums);
    });
  }, [setAlbums]);

  return (
    <div className="wrapper">
      <h1 className="title">All albums</h1>
      <ul className="container">
        {albums.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </ul>
    </div>
  );
}
