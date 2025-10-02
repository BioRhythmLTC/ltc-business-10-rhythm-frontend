import type { IResponse, ISearchText } from "../../types/types";

const baseUrl = "http://158.160.184.9:8000/api/predict";

export const getSearchTypes = async ({
  text,
}: ISearchText): Promise<{ data?: IResponse[]; error?: string }> => {
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

    return { data };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    return { error: errorMessage, data: [] };
  }
};
