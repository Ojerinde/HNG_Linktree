import { Route, Routes, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};
export default App;
