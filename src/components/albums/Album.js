import React from "react";


import "./Album.css";

export default function Album({ album }) {
  return (
    <article className="album">
      <div className="albumCover" />
      <div className="background" />
      <p className="albumTitle">{album.title}</p>
    </article>
  );
}
