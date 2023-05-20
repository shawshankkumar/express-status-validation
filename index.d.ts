import { Request, Response, NextFunction } from 'express';

declare function expressStatusValidate(): (req: Request, res: Response, next: NextFunction) => void;

export = expressStatusValidate;
