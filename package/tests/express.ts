import express, { Request, Response, NextFunction } from "express";
import { expressStatusValidate } from "../src/index";

const app = express();

app.use(expressStatusValidate());

app.get("/i-am-a-200", (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(200);
});

app.post("/i-am-a-500", (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(500);
});

app.delete(
  "/i-am-john-cena",
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(404);
  }
);

app.get("/i-am-a-709", (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(709);
});

app.post(
  "/i-am-a-string",
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus("200okay" as any);
  }
);

app.delete(
  "/i-am-an-object",
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus({ name: "Shashank" } as any);
  }
);

export { app };
