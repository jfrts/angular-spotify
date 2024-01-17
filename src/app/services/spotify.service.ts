import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  getLoginURL(): string {
    const authEndPoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectURL = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join("%20")}&`;
    const responseType = `response_type=token&show_dialog=true`;
    const loginURL = authEndPoint + clientId + redirectURL + scopes + responseType;
    return loginURL;
  }

  getTokenUrlCallback(): string {
    if (!window.location.hash) {
      return "";
    }
    const tokenHashString = window.location.hash;
    const getTokenRegExpPattern = /#access_token=([^&]+)/;
    const token = tokenHashString.match(getTokenRegExpPattern)?.[1]!;
    return token;
  }

  defineAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    window.localStorage.setItem("chat-spotify-token", token);
    this.spotifyApi.skipToNext();
  }
}
