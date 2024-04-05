const customStatuandError = (model = "") => {
  return {
    200: `Something is happening successfully`,
    500: `Server is not responding.Please try again!`,
    400: `Bad Request`,
    401: "Unauthorized credential",
    404: `${model} not found`,
    409: `${model} already exist`,
    201: `${model} created successfully`,
  };
};

module.exports = customStatuandError;
