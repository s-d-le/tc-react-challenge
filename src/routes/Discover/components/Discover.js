import React, { useState, useEffect } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import config from "../../../config";
import { useAuth } from "../../../hooks/useAuth";

const Discover = () => {
  const { token } = useAuth();

  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });

    await fetch(`${config.api.baseUrl}/browse/new-releases`, { headers })
      .then((response) => response.json())
      .then((data) => setNewReleases(data.albums.items));

    await fetch(`${config.api.baseUrl}/browse/featured-playlists`, { headers })
      .then((response) => response.json())
      .then((data) => setPlaylists(data.playlists.items));

    await fetch(`${config.api.baseUrl}/browse/categories`, {
      headers,
    })
      .then((response) => response.json())
      // .then((data) => console.log(data.categories.items));
      .then((data) => setCategories(data.categories.items));
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories.map((category) => ({
          images: category.icons,
          name: category.name,
        }))}
      />
    </div>
  );
};

export default Discover;
