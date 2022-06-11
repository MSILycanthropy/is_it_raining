import { base_url, codes } from "../constants";

export async function isItRaining(lat, lng) {
  console.log(lat);
  console.log(lng);

  const url = new URL(base_url);
  url.searchParams.set("key", import.meta.env.VITE_API_KEY);
  url.searchParams.set("q", `${lat},${lng}`);

  const data = await fetch(url).then((response) => response.json());

  return codes.includes(parseInt(data.current.condition.code));
}
