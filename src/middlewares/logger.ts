import { Request, Response, NextFunction } from "express";

export const expressLogger = (isDebugging: boolean) => (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const currentDatetime = new Date();
  const datetimeLog = `${currentDatetime.getFullYear()}-${
    currentDatetime.getMonth() + 1
  }-${currentDatetime.getDate()} ${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`;

  console.log(`[API] ${datetimeLog} ${request.url}`);

  if (isDebugging) {
    console.log({
      params: request.params,
      query: request.query,
      body: request.body,
    });
  }

  next();
};
