import { Cheerio } from "cheerio";
import { NextResponse } from "next/server";

type Submit = {
  sku: string;
  token: string;
  region: string;
  add: string;
};

export async function POST(request: Request) {
  const data: Submit = await request.json();
  const { sku, token, region, add } = data;

  const formData = {
    sku,
    token,
    region,
    add,
  };

  try {
    const response = await fetch("http://rwfh.me/title.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Host: "rwfh.me",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const imgElements = doc.querySelectorAll("img");
      if (imgElements.length >= 2) {
        const secondImgElement = imgElements[1]; // Second img element
        const src = secondImgElement.getAttribute("src");
        if (src) {
          console.log("Second image URL:", src);
          return NextResponse.json({ src: src });
        } else {
          console.log("Second image URL not found");
        }
      } else {
        console.log("No second image found");
      }
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
