import { NextResponse } from "next/server";

type Submit = {
  sku: string;
  token: string;
  region: string;
  add: string;
};

const authPattern = /\bThe AUTH is wrong or expired, Please get a new one\.\b/;
const imgSrcPattern =
  /<img\s+src="http:\/\/apollo2\.dl\.playstation\.net([^"]+)"/;
const itemIdPattern = /\bitem\s+Id\s+doesn't\s+match\s+your\s+region\.\b/;

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
      if (authPattern.test(html)) {
        return NextResponse.json({
          message:
            "The authentication is incorrect or has expired. Please obtain a new one.",
        });
      }
      if (itemIdPattern.test(html)) {
        return NextResponse.json({
          message:
            "The Avatar ID doesn't match the region. Please verify its correctness or alignment.",
        });
      }
      if (imgSrcPattern.test(html)) {
        const imgSrcMatch = imgSrcPattern.exec(html);
        if (imgSrcMatch) {
          return NextResponse.json({
            message: "Avatar successfully added to PlayStation Store cart.",
            src: imgSrcMatch,
          });
        }
      }
      return NextResponse.json({
        message: "Response does not match expected cases.",
        html: html,
      });
    } else {
      console.error("Error:", response.statusText);
      return NextResponse.json({
        message: "Rwfh is not responding",
        source: "Rwfh Server",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: error, source: "Vercel Servers" });
  }
}
