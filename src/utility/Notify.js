import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// To Make Notifaction To Any Component
const notify = (msg, type) => {
  if (type === "warn") {
    toast.warn(msg, {
      autoClose: 3000,
    });
  } else if (type === "success") {
    toast.success(msg, {
      autoClose: 3000,
    });
  } else if (type === "error") {
    toast.error(msg, {
      autoClose: 3000,
    });
  }
};

export default notify;
