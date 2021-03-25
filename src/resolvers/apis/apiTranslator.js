export default {
  createApi: () => {
    return {
      apiPath: "/apis",
      method: "POST",
    };
  },
  updateApi: (apiId) => {
    return {
      apiPath: `/apis/${apiId}`,
      method: "PUT",
    };
  },
  removeApi: (apiId) => {
    return {
      apiPath: `/apis/${apiId}`,
      method: "DELETE",
    };
  },
  startApi: (apiId) => {
    return {
      apiPath: `/apis/${apiId}/start`,
      method: "POST",
    };
  },
  stopApi: (apiId) => {
    return {
      apiPath: `/apis/${apiId}/stop`,
      method: "POST",
    };
  },
  createRoute: (apiId) => {
    return {
      apiPath: `/apis/${apiId}/routes`,
      method: "POST",
    };
  },
  updateRoute: (apiId) => {
    return {
      apiPath: `/apis/${apiId}/routes`,
      method: "PUT",
    };
  },
  removeRoute: (apiId) => {
    return {
      apiPath: `/apis/${apiId}/routes`,
      method: "DELETE",
    };
  },
  createRouteParams: (apiId, routeId) => {
    return {
      apiPath: `/apis/${apiId}/routes/${routeId}/params`,
      method: "POST",
    };
  },
  updateRouteParams: (apiId, routeId) => {
    return {
      apiPath: `/apis/${apiId}/routes/${routeId}/params`,
      method: "PUT",
    };
  },
  removeRouteParams: (apiId, routeId) => {
    return {
      apiPath: `/apis/${apiId}/routes/${routeId}/params`,
      method: "DELETE",
    };
  },
}