import fetch from 'node-fetch';
import dotenv from 'dotenv';

class ServerData {
  
  constructor () {
    dotenv.config();
    this.getApiData();
    this.getResponseData();
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

  getApiData () {
    fetch(process.env.BASE_BACKEND_URL + 'apis')
      .then(response => response.json())
      .then((data) => {
        if (data.meta.statusCode == 200) {
          this.dataApi = data.data;
        }
        else {
          this.dataApi = { status: 404, message : "error" };
        }
      })
      .catch((err) => {
        console.log(err);
        this.dataApi = { status: 500, message : "error" };
      });
  }

  getResponseData () {
    fetch(process.env.BASE_BACKEND_URL + 'responses')
      .then(response => response.json())
      .then((data) => {
        if (data.meta.statusCode == 200) {
          this.dataResponse = data.data;
        }
        else {
          this.dataResponse = { status: 404, message : "error" };
        }
      })
      .catch((err) => {
        console.log(err);
        this.dataResponse = { status: 500, message : "error" };
      });
  }
}



export {ServerData};