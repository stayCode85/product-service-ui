import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:8080/products";

export function getProducts() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

