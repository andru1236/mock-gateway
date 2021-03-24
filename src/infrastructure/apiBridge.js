import fetch from "node-fetch";
import readEnv from "./readEnv";
import { errorHandler } from "./errors";
import { logger } from "./logger";

readEnv();
const IP_REST_API = process.env.BASE_BACKEND_URL;

const responseHandler = async (rawResponse) => {
  logger.debug(`responseHandler, transform raw response -> cleaned response`);
  const response = await rawResponse.json();

  logger.debug(response);
  
  // # TODO add logic of the responses
  return [200, 201].includes(response?.meta?.statusCode)
    ? "Success full"
    : "Something wrong";
};

export const executeApiBrige = async (
  mockApiPath,
  method,
  body = null,
  callback = null
) => {
  const httpSetting = {
    method: method.toUpperCase(),
    body: body !== null ? JSON.stringify(body) : null,
    headers: { "Content-Type": "application/json" },
  };

  logger.info(`Make requesto to Mock API REST: ${IP_REST_API}${mockApiPath}`);

  try {
    const rawResponse = await fetch(IP_REST_API + mockApiPath, httpSetting);
    const cleanedResponse = await responseHandler(rawResponse);
    if (callback !== null) {
      return callback(cleanedResponse);
    }
    return cleanedResponse;
    
  } catch (error) {
    return errorHandler(error);
  }
};
















class ServerData {
  constructor() {}

  async post(dataBody, dataUrl) {
    // post api data
    let response = await fetch(process.env.BASE_BACKEND_URL + dataUrl, {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.meta && data.meta.statusCode == 201) {
          return { status: 201, data: data.data };
        } else {
          return { status: 404, message: "Error on post new data." };
        }
      })
      .catch((err) => {
        console.log(err);
        return {
          status: 500,
          message: "Error trying to post with server data.",
        };
      });

    return response;
  }

  async put(dataBody, dataUrl) {
    // update api data
    let response = await fetch(process.env.BASE_BACKEND_URL + dataUrl, {
      method: "PUT",
      body: JSON.stringify(dataBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.meta && data.meta.statusCode == 200) {
          return { status: 200, data: data.data };
        } else {
          return { status: 404, message: "Error on put data." };
        }
      })
      .catch((err) => {
        console.log(err);
        return {
          status: 500,
          message: "Error trying to put with server data.",
        };
      });

    return response;
  }

  async delete(dataUrl) {
    // delete api data
    let response = await fetch(process.env.BASE_BACKEND_URL + dataUrl, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.meta && data.meta.statusCode == 200) {
          return { status: 200, data: data.data };
        } else {
          return { status: 404, message: "Error on delete data." };
        }
      })
      .catch((err) => {
        console.log(err);
        return {
          status: 500,
          message: "Error trying to delete with server data.",
        };
      });

    return response;
  }
}

export { ServerData };
