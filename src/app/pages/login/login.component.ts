import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss"
})
export class LoginComponent implements OnInit {
    constructor(private readonly spotifyService: SpotifyService) { }

    ngOnInit(): void { }

    openLoginPage() {
        window.location.href = this.spotifyService.getLoginURL();
    }
}