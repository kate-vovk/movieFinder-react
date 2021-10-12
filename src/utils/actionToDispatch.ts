export function actionToDispatch(
  action: string,
  params?: string | { [key: string]: string | number },
): {
  type: string;
  payload?: string | { [key: string]: string | number };
} {
  return {
    type: action,
    payload: params,
  };
}
