export interface Response {
  success: boolean;
  message: string;
  [x: string]: unknown;
}
export type Respond = (success: boolean, message: string, meta?: Record<string, unknown>) => Response;

const respond: Respond = (success, message, meta) => {
  return ({
    success,
    message,
    ...meta
  });
};

export default respond;
