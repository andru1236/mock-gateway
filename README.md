# mock-gateway
GQL, API REST

GraphQL queries to test
-----------------------
query getApis {
  apis {
    _id
    name
    port
    routes {
      _id
      path
    }
  }
}
query getApi($id: String!) {
  api(_id: $id) {
    _id
    name
    port
    settings {
      enabled
      created_on
    }
    routes {
      _id
      path
      resources
    }
  }
}

query getResponses {
  responses {
    _id
    name
    created_on
    tracking_assignation {
      api_id
    }
  }
}
query getResponse($id: String!) {
  response(_id: $id) {
    _id
    name
    response
    created_on
    tracking_assignation {
      api_id
      routes {
        path
        method
        date
      }
    }
  }
}