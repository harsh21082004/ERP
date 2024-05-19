import toast from 'react-hot-toast';

import { ToastMessage } from '~/components/atoms';

export default function useToasts(
  { isStyled = true } = {
    isStyled: true,
  }
) {
  let successToast;
  let errorToast;
  let infoToast;

  if (isStyled) {
    successToast = (toastMessage, successToastProps, styledToastProps) => {
      toast.custom(
        (tProps) => (
          <ToastMessage
            color={ToastMessage.COLORS.SUCCESS}
            message={toastMessage}
            {...styledToastProps}
            onClose={() => toast.remove(tProps.id)}
          />
        ),
        successToastProps
      );
    };
    errorToast = (toastMessage, errorToastProps, styledToastProps) => {
      toast.custom(
        (tProps) => (
          <ToastMessage
            color={ToastMessage.COLORS.ERROR}
            message={toastMessage}
            {...styledToastProps}
            onClose={() => toast.remove(tProps.id)}
          />
        ),
        { ...errorToastProps, duration: 5000 }
      );
    };
    infoToast = (toastMessage, infoToastProps, styledToastProps) => {
      toast.custom(
        (tProps) => (
          <ToastMessage
            color={ToastMessage.COLORS.INFO}
            message={toastMessage}
            {...styledToastProps}
            onClose={() => toast.remove(tProps.id)}
          />
        ),
        infoToastProps
      );
    };
  } else {
    successToast = (toastMessage, successToastProps) => {
      toast.success(toastMessage, successToastProps);
    };
    errorToast = (toastMessage, errorToastProps) => {
      toast.error(toastMessage, errorToastProps);
    };
    infoToast = (toastMessage, infoToastProps) => {
      toast(toastMessage, infoToastProps);
    };
  }

  return { successToast, errorToast, infoToast };
}
