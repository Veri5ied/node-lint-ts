import { CustomAPIError } from "../errors/custom-error";

const errorHandler = (
  err: any,
  req: any,
  res: Response | string | any,
  next: any
) => {
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: "Something went wrong please try again later",
  });
};

export default errorHandler;
