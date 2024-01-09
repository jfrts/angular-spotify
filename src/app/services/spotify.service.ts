import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  getLoginURL(): string {
    const authEndPoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectURL = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scopes=${SpotifyConfiguration.scopes.join("%20")}&`;
    const responseType = `response_type=token&show_dialog=true`;
    const loginURL = authEndPoint + clientId + redirectURL + scopes + responseType;
    return loginURL;
  }
}
