import React, { useState, useEffect } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { useAuth } from "../../../hooks/useAuth";

const Discover = () => {
  const { token } = useAuth();

  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("token", token);
  }, [token]);

  const fetchData = async () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.api.clientSecret}`,
    });
    const newReleasesResponse = await fetch(
      `${config.api.baseUrl}/new-releases`,
      { headers }
    );
    const playlistsResponse = await fetch(
      `${config.api.baseUrl}/featured-playlists`,
      { headers }
    );
    const categoriesResponse = await fetch(`${config.api.baseUrl}/categories`, {
      headers,
    });
    const newReleasesData = await newReleasesResponse.json();
    const playlistsData = await playlistsResponse.json();
    const categoriesData = await categoriesResponse.json();
    this.setState({
      newReleases: newReleasesData.albums.items,
      playlists: playlistsData.playlists.items,
      categories: categoriesData.categories.items,
      isLoading: false,
    });
  };

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} />
    </div>
  );
};

export default Discover;
