import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./Components/Home/Home";

// This is the function that will be called whenever the eroor boundary catches an error in the application
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="error">
      <p>Something went wrong!</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Restart app</button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate("/");
        }}
      >
        <Home />
      </ErrorBoundary>
    </>
  );
};
export default App;
