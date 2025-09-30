import type { IResponse, ISearchText } from "../../types/types";

const baseUrl = "/api/predict";


export const getSearchTypes = async ({ text }: ISearchText): Promise<IResponse[]> => {
  try {
    const result = await fetch(baseUrl, {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: text,
      }),
    });

    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }

    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
