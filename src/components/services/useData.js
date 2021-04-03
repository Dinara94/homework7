import { useEffect, useState } from 'react';
import Axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/albums";
const ALBUMS_URL = "https://jsonplaceholder.typicode.com/users"

export default function useData() {
const [users, setUsers] = useState([]);
const [albums, setAlbums] = useState([]);

  useEffect(() => {
    Axios.get(USERS_URL).then(({ data }) => setUsers(data));
    Axios.get(ALBUMS_URL).then(({ data }) => setAlbums(data));
  }, []);


  return [users, albums];
}