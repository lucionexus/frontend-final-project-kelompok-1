import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS //
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Layout from "./components/Layout";
import NotFound from "./pages/404/NotFound";
import Upgrade from "./pages/upgrade/Upgrade";
import Browse from "./pages/browse/Browse";
import AddSong from "./pages/admin/AddSong";
import AddAlbum from "./pages/admin/AddAlbum";
import AddArtist from "./pages/admin/AddArtist";
import Admin from "./pages/admin/Admin";
import Favourites from "./pages/favourites/Favourites";
import CreatePlaylist from "./pages/createPlaylist/CreatePlaylist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        add/
        <Route index element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/upgrade" element={<Upgrade />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/create-playlist" element={<CreatePlaylist />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/upgrade" element={<Upgrade />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/song" element={<AddSong />}></Route>
        <Route path="/admin/album" element={<AddAlbum />}></Route>
        <Route path="/admin/artist" element={<AddArtist />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
