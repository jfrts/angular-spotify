export const SpotifyConfiguration = {
    clientId: "8dd9e1265a5f4ecf8458a2516f596d2c",
    authEndpoint: "https://accounts.spotify.com/authorize",
    redirectUrl: "http://localhost:4200/login/",
    scopes: [
        "user-read-currently-playing", // música tocando agora
        "user-read-recently-played", // ler músicas tocadas recentemente
        "user-read-playback-state", // ler estado do player do usuário
        "user-top-read", // top artistas e músicas do usuário
        "user-modify-playback-state", // alterar o player do usuário
        "user-library-read", // ler biblioteca do usuário
        "playlist-read-private", // ler playlists privadas
        "plylist-read-collaborative", // ler playlists colaborativas
    ]
};