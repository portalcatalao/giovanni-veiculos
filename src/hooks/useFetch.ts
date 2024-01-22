import { cookies } from "next/headers";

export const fetchData = async (path: string, ttl?: number) => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL_DEFAULT + path, {
        headers: {
            'X-AUTH-APIKEY': process.env.NEXT_PUBLIC_AUTH_APIKEY
        },
        next: {
            revalidate: ttl ?? 60 * 60 * 4,
        }
    });

    const data = await res.json();

    return data;
}