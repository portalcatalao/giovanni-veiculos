import axios from "axios";

export const api = axios.create(
    {
        baseURL: process.env.NEXT_PUBLIC_URL_DEFAULT,
        headers: {
            'X-AUTH-APIKEY': process.env.NEXT_PUBLIC_AUTH_APIKEY
        }
    }
)