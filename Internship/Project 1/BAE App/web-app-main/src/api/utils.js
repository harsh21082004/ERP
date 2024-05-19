import { REQUEST_STATES } from '~/constants';

export const isRequestStateIdle = (requestState) =>
  requestState === REQUEST_STATES.IDLE;

export const isRequestStatePending = (requestState) =>
  requestState === REQUEST_STATES.PENDING;

export const isRequestStateFulfilled = (requestState) =>
  requestState === REQUEST_STATES.FULFILLED;

export const isRequestStateRejected = (requestState) =>
  requestState === REQUEST_STATES.REJECTED;

export const getRequestStateFlags = (requestState) => ({
  idle: isRequestStateIdle(requestState),
  pending: isRequestStatePending(requestState),
  fulfilled: isRequestStateFulfilled(requestState),
  rejected: isRequestStateRejected(requestState),
});

export const getRequestStateFlagsWithError = (requestState, requestError) => ({
  ...getRequestStateFlags(requestState),
  error: requestError,
  rawState: requestState,
});

/**
 * Get formatted error message from api error payloads
 * @param {{
 *    responseErrorPayload: {
 *        payload: {
 *            statusCode?: string,
 *            errorCode?: string,
 *            message?: string
 *            success?: boolean,
 *            fieldErrors?: Record<string, any>
 *        }
 *    }
 * }} resErrorPayload Action payload with rejected api response
 * @param {*} defaultMessage Default error message
 */
export const extractResponseError = (resErrorPayload) => {
  const statusCode = resErrorPayload?.response?.status;
  const data = resErrorPayload?.payload;
  const errorCode = data?.errorCode || '';
  const errorMessage = data?.message || '';
  const fieldErrors = data?.fieldErrors || null;
  return { statusCode, errorCode, errorMessage, fieldErrors };
};

export const formatResponseError = (statusCode, errorMsg, fallbackErrMsg) =>
  (statusCode ? `(${statusCode}) ` : '') + (errorMsg || fallbackErrMsg);
