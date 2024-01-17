import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss"
})
export class LoginComponent implements OnInit {
    constructor(private readonly spotifyService: SpotifyService) { }

    ngOnInit(): void {
        this.validateTokenUrlCallback();
    }

    openLoginPage() {
        window.location.href = this.spotifyService.getLoginURL();
    }

    validateTokenUrlCallback() {
        const token = this.spotifyService.getTokenUrlCallback();
        if (!!token) {
            this.spotifyService.defineAccessToken(token);
        }
    }
}