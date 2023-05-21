import { Request, Response, NextFunction } from "express";
import { validStatusCodesArr } from "./contant";


function expressStatusValidate(defaultStatusCode: number = 500){
  if(typeof defaultStatusCode != "number" && !validStatusCodesArr.includes(defaultStatusCode)) throw new Error("defaultStatusCode must be a number");
  return function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const sendCopy = res.send;
    res.send = function (data) {
      const { statusCode } = res;
      let finalStatusCode = statusCode;
      finalStatusCode = getFinalStatusCode(statusCode, defaultStatusCode);
      res.status(finalStatusCode);
      sendCopy.apply(res, arguments as any);
    } as any;
    next();
  }
}

function getFinalStatusCode(statusCode, defaultStatusCode = 500) {
  const typeOfStatusCode = typeof statusCode;
  if(typeOfStatusCode != "number" && typeOfStatusCode != "string") return defaultStatusCode;
  const statusCodeNumber = parseInt(statusCode);
  if(isNaN(statusCodeNumber)) return defaultStatusCode;
  if(validStatusCodesArr.includes(statusCodeNumber)){
    return statusCodeNumber;
  }
  return defaultStatusCode;
}

export = expressStatusValidate;
