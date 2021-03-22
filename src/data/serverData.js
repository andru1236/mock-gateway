import {mongoDb, ObjectId} from './mongoData.js';
import fetch from 'node-fetch';
import dotenv from './environment.js';
class ServerData {
  
  constructor () {
  }

  async postApiData (apiBody) {
    // post api data
    fetch(process.env.BASE_BACKEND_URL + 'apis', {
      method: 'POST',
      body: JSON.stringify(apiBody),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then((data) => {
      if (data.meta && data.meta.statusCode == 201) {
        return { status: 201, data: data.data };
      }
      else {
        return { status: 404, message : "error" };
      }
    })
    .catch((err) => {
      console.log(err);
      return { status: 500, message : "error" };
    });
  }

  async putApiData (apiId, apiBody) {
    // update api data
    fetch(process.env.BASE_BACKEND_URL + 'apis/' + apiId, {
      method: 'PUT',
      body: JSON.stringify(apiBody),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then((data) => {
      if (data.meta && data.meta.statusCode == 200) {
        return { status: 200, data: data.data };
      }
      else {
        return { status: 404, message : "error" };
      }
    })
    .catch((err) => {
      console.log(err);
      return { status: 500, message : "error" };
    });
  }

  async deleteApiData (apiId) {
    // delete api data
    fetch(process.env.BASE_BACKEND_URL + 'apis/' + apiId, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then((data) => {
      if (data.meta && data.meta.statusCode == 200) {
        return { status: 200, data: data.data };
      }
      else {
        return { status: 404, message : "error" };
      }
    })
    .catch((err) => {
      console.log(err);
      return { status: 500, message : "error" };
    });
  }

  async getApiData () {
    let apiData = mongoDb.getApis();

    if (apiData) {
      let apis = await apiData.find({}).toArray();
      return apis;
    }
    else {
      return { status: 404, message : "error" };
    }
  }

  async getApiById (apiId) {
    let apiData = mongoDb.getApis();

    if (apiData) {
      let api = await apiData.findOne(ObjectId(apiId));
      return api;
    }
    else {
      return { status: 404, message : "error" };
    }
  }

  async getResponseData () {
    let responseData = mongoDb.getResponses();

    if (responseData) {
      let responses = await responseData.find({}).toArray();
      return responses;
    }
    else {
      return { status: 404, message : "error" };
    }
  }

  async getResponseById (responseId) {
    let responseData = mongoDb.getResponses();

    if (responseData) {
      let res = await responseData.findOne(ObjectId(responseId));
      return res;
    }
    else {
      return { status: 404, message : "error" };
    }
  }
}



export {ServerData};