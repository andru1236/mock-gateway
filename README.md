# mock-gateway
GQL, API REST


## Requierements:
* Nvm
* Node 14
* Yarn
* Mongodb
* Docker
* Docker-compose
---
## Run with docker
```bash
Make build
Make start
```

## Without docker:
```bash
yarn
yarn start
# Run Docker in port 27017
```

```gql
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
      api{
        id
        name
        port
        routes{
          ...
        }
      }
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
      api{
        id
        name
        port
        routes{
          ...
        }
      }
      routes {
        path
        method
        date
      }
    }
  }
}
```