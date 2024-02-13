import { FormEvent } from "react";

export async function formHandler(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  // const sku = event.currentTarget.sku.value;
  // const token = event.currentTarget.token.value;

  // const formData = {
  //   sku,
  //   token,
  //   region: "ar-AE",
  //   add: "Submit",
  // };

  // try {
  //   const response = await fetch("/api/submit", {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //   });
  //   console.log("Request successful");
  // } catch (error) {
  //   console.error("Error:", error);
  // }
}
