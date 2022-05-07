import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase/firebase.init";
import Spinner from "../Spinner/Spinner";
import "./RequirAuth.css";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, error] = useSendEmailVerification(auth);

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (error) {
    toast(error.message);
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (!user?.emailVerified) {
    return (
      <div className="verify-email">
        <h2>Please verify your email address</h2>
        <button
          className="btn"
          onClick={async () => {
            await sendEmailVerification();
            toast.success("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
