import { handleResponse, handleError } from "./apiUtils";


export function getResults(offset, limit, searchKey) {
    return fetch(`https://itunes.apple.com/search?media=music&offset=${offset}&limit=${limit}&term=${searchKey}`)
      .then(response =>  response.json())
      .catch(handleError);
  }