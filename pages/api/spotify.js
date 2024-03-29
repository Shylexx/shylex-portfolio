import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token
        })
    });

    return response.json();
};

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
    const {access_token} = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};

async function SpotifyAPI (_, res) {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({isPlaying :false});
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const songURL = song.item.external_urls.spotify;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const albumImageUrl = song.item.album.images[0].url;

    return res.status(200).json({
        songURL,
        albumImageUrl,
        artist,
        isPlaying,
        title,
    });
};

export default SpotifyAPI
