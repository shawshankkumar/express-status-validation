import { Request, Response, NextFunction } from 'express';

function expressStatusValidate(req: Request, res: Response, next: NextFunction) {
    const sendCopy = res.send;
    res.send = function (data) {
      if (res.statusCode < 200 || res.statusCode > 600 || typeof res.statusCode != "number") res.status(500);
      sendCopy.apply(res, arguments as any);
    } as any;
    next();
  }
    
export = expressStatusValidate;