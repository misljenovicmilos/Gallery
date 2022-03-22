import { useState } from "react";
import { ImgType, getImg } from "modules/gallery";

export const useImg = () => {
  const [response, setResponse] = useState<ImgType[]>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(1);
  const handleData = (search: string) => {
    setIsLoading(true);
    getImg(search).then(async (res) => {
      if (res.status >= 200 && res.status <= 299) {
        const json = await res.json();
        setTotalResults(json.total);
        setIsLoading(false);
        setResponse(json.hits);
      } else {
        const json: Error = await res.json();
        setIsLoading(false);

        setError(json);
      }
    });
  };
  return { handleData, isLoading, response, error, totalResults };
};
