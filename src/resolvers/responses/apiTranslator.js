export default {
  createResponse: () => {
    return {
      apiPath: "/responses",
      method: "POST"
    };
  },
  updateResponse: (responseId) => {
    return {
      apiPath: `/responses/${responseId}`,
      method: "PUT",
    };
  },
  removeResponse: (responseId) => {
    return {
      apiPath: `/responses/${responseId}`,
      method: "DELETE",
    };
  },
  assignResponseToApi: (responseId) => {
    return {
      apiPath: `/responses/${responseId}`,
      method: "POST",
    };
  },
};