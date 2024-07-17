import { type Response } from "express";

export type Status = 200 | 201 | 400 | 401 | 402 | 403 | 404 | 405 | 429 | 500;

/**
 * Represents a server response.
 * @interface IResponse
 */
interface IResponse<Data = unknown> {
  res: Response;
  /**
   * A optional message describing the response.
   */
  msg?: string;
  /**
   * Status code.
   * @example
   * 200: Request was successful
   * 201: Request was successfully fulfilled and resulted in one or possibly multiple new resources being created
   * 400: Bad Request
   * 401: Unauthorized
   * 402: Payment Required
   * 403: Forbidden
   * 404: Not Found
   * 405: Method Not Allowed
   * 429: You are being rate limited
   * 500: Something went wrong
   */
  status?: Status;
  /**
   * An optional data object, if the response contains data.
   */
  data?: Data;
  /**
   * An optional metadata object, if the response contains metadata.
   */
  metadata?: unknown;
  /**
   * An optional error
   */
  error?: any;
}

export const responseHandler = <T>(props: IResponse<T>) => {
  let message;

  if (props.msg) {
    message = props.msg;
  } else {
    if (props.error) {
      message = "Something went wrong";
    } else {
      message = "success";
    }
  }

  if (props.error) console.log("Error", props.error);

  let status: Status = 200;

  if (props.status) {
    status = props.status;
  } else {
    if (props.error) {
      status = 500;
    } else {
      status = 200;
    }
  }

  return props.res.status(status).json({
    msg: message,
    data: props.data,
    metadata: props.metadata,
  });
};
