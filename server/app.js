const express = require("express");
var app = express();

var SpotifyWebApi = require("spotify-web-api-node");
scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-modify-public",
  "playlist-modify-private"
];

// require("dotenv").config();
var spotifyApi = new SpotifyWebApi({
  clientId: "2c9ea54e13cd4565be0e0a9eefc6f3ec",
  clientSecret: "f64246cb7d234dcc981fa968b570d910",
  redirectUri: "http://localhost:3000/callback"
});

spotifyApi.clientCredentialsGrant().then(
  function(data) {
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function(err) {
    console.log("Failed to retrieve an access token", err);
  }
);

app.get("/", function(req, res) {
  res.send("hi");
});

// auth
app.get("/login", (req, res) => {
  var html = spotifyApi.createAuthorizeURL(scopes);
  res.send(html + "%show_dialog=true");
});

app.get("/callback", async (req, res) => {
  const { code } = req.query;
  try {
    var data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    res.redirect("http://localhost:3001/home");
  } catch (err) {
    res.redirect("/#/error/invalid token");
  }
});

// playlists
app.get("/playlist", async (req, res) => {
  try {
    var result = await spotifyApi.getUserPlaylists();
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get user
app.get("/user", async (req, res) => {
  try {
    var result = await spotifyApi.getUser();
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get artist
app.get("/artist/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var result = await spotifyApi.getArtist(id);
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get artists
app.get("/artists/:ids", async (req, res) => {
  try {
    var ids = req.params.ids.split(",");
    var result = await spotifyApi.getArtists(ids);
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get artist's top tracks
app.get("/artist/:id/toptracks", async (req, res) => {
  try {
    var id = req.params.id;
    var location = req.query.loc;
    var result = await spotifyApi.getArtistTopTracks(id, location);
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get artist's related artists
app.get("/artist/:id/relatedartists", async (req, res) => {
  try {
    var id = req.params.id;
    var result = await spotifyApi.getArtistRelatedArtists(id);
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(3000);

//module.exports = router;
