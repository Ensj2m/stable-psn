import axios from "axios";
import { NextResponse } from "next/server";

type Data = {
  skuID: string;
  token: string;
  region: string;
};

const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Origin: "http://rwfh.me",
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
  Host: "rwfh.me",
};

export async function POST(request: Request) {
  const data: Data = await request.json();
  const { skuID, token, region } = data;

  const searchParams = new URLSearchParams();
  searchParams.append("sku", skuID);
  searchParams.append("token", token);
  searchParams.append("region", region);
  searchParams.append("add", "Submit");

  axios
    .post("http://rwfh.me/title.php", searchParams, { headers })
    .then((response) => {
      console.log(response.data);
      return NextResponse.json({
        data: response.data,
        headers: response.headers,
      });
    })
    .catch((error) => {
      console.error(error);
      return NextResponse.json({ msg: error });
    });
}
