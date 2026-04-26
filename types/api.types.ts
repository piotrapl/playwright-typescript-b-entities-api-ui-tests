/* 
Definicje interfejsów i typów, które będą używane
do reprezentowania danych zwracanych przez API.
*/
export type ApiResponseBody = {
  d: string;
};

export type ApiResponse = {
  status: number;
  body: ApiResponseBody;
};