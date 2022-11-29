export const router = {
  GET: {
    "/": (req, res) => {
      console.log({ reqUrl: req.url });
      return "Hello world";
    },
    // called from clickUp
    // call github api dependent on coming event
    "/webhook": (req, res) => {
      console.log("WEBHOOK-GET");
    },
  },
  POST: {
    "/webhook": (req, res) => {
      console.log("WEBHOOK-POST");
      let data = "";

      req.on("data", (chunk) => {
        data += chunk;
      });

      req.on("end", () => {
        console.log("WEBHOOK payload", { data, string: data.toString(), obj: JSON.parse(data.toString()) });
      });
    },
  },
};
