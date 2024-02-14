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

const imgSrcRegexPattern =
  /<img\s+src="http:\/\/apollo2\.dl\.playstation\.net([^"]+)"/;

export async function POST(request: Request) {
  const data: Data = await request.json();
  const { skuID, token, region } = data;

  const searchParams = new URLSearchParams();
  searchParams.append("sku", skuID);
  searchParams.append("token", token);
  searchParams.append("region", region);
  searchParams.append("add", "Submit");

  let isAddedToCart: boolean | null = null;
  let img: string | null = null;

  try {
    const response = await axios.post(
      "http://rwfh.me/title.php",
      searchParams,
      { headers }
    );
    console.log(response.data);
    const imgSrcMatch = imgSrcRegexPattern.exec(response.data);
    if (imgSrcMatch) {
      console.log("IMG src:", imgSrcMatch[1]);
      isAddedToCart = true;
      img = imgSrcMatch[1];
    } else {
      isAddedToCart = false;
    }
  } catch (error) {
    console.error(error);
    isAddedToCart = false;
  }

  return NextResponse.json({ isAddedToCart: isAddedToCart, img: img });
}
