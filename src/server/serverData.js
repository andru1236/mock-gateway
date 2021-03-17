import fetch from 'node-fetch';
import dotenv from 'dotenv';

class ServerData {
  
  constructor () {
    dotenv.config();
    this.getApiData();
    this.getResponseData();
  }

  getApiData () {
    fetch(process.env.BASE_BACKEND_URL + 'apis')
      .then(response => response.json())
      .then((data) => {
        console.log(data.meta);
        if (data.meta.statusCode == 200) {
          this.dataApi = data.data;
        }
        else {
          this.dataApi = { "message" : "error", "status": "404"};
        }
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
          this.dataResponse = { "message" : "error", "status": "404"};
        }
      });
  }
}



export {ServerData};