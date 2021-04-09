export const errorInfo = {
  success: {
    "POST": { status: 200, message: "Post data successfully." },
    "PUT": { status: 200, message: "Put data successfully." },
    "DELETE": { status: 200, message: "Delete data successfully."},
  },
  dbcServerError: {
    "POST": { status: 500, message: "Error on dbc server trying to Post data." },
    "PUT": { status: 500, message: "Error on dbc server trying to Put data." },
    "DELETE": { status: 500, message: "Error on dbc server trying to Delete data." },
  },
  responseError: {
    "POST": { status: 400, message: "Something went wrong when trying to Post data." },
    "PUT": { status: 400, message: "Something went wrong when trying to Put data." },
    "DELETE": { status: 400, message: "Something went wrong when trying to Delete data." },
  },
  nonFound: {
    "404": { status: 404, message: "Error: Data no found." },
  },
  defaultSuccess: {
    "200": { status: 200, message: "Process executed successfully." },
    "201": { status: 201, message: "Process executed successfully." },
  },
  defaultError: {
    "400": { status: 400, message: "Something went wrong, try again." },
  },
  jsonError: {
    "fileName": { status: 400, message: "Error: File name is empty or null." },
    "emptyJson": { status: 400, message: "Error: Json content is empty or null." },
  }
};