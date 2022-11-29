export const router = {
  GET: {
    "/": (req, res) => {
      console.log({ reqUrl: req.url });
      return "Hello world";
    },
    // called from clickUp
    // call github api dependent on coming event
    "/webhook": (req, res) => {
      console.log("WEBHOOK-GET: ", { req });
    },
  },
  POST: {
    "/webhook": (req, res) => {
      console.log("WEBHOOK-POST: ", { req });
    },
  },
};
