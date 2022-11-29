import { router } from "./router.mjs";
import { ServerError } from "./errors.mjs";
import { isFunction } from "./utils.mjs";
/**
 *
 * @param {IncomeMessage} req
 * @param {ServerResponse} res
 */
export async function handler(req, res) {
  console.log({ method: req.method, url: req.url });
  const transportMethodHandlers = router[req.method];

  if (!transportMethodHandlers) {
    return this.emit("error", new ServerError(`Cannot handle request method: ${req.method}`, res));
  }

  const handlerMethod = transportMethodHandlers[req.url];

  if (!handlerMethod || !isFunction(handlerMethod)) {
    return this.emit("error", new ServerError(`Cannot handle url: ${req.url}`, res));
  }

  const result = await handlerMethod(req, res);

  res.end(result);
}
