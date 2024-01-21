import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/login/Login";
import PageNotFound from "./components/login/PageNotFound";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <ToastContainer
        theme="colored"
        draggable={false}
        hideProgressBar={true}
      />
      <Routes>
        {/* PrivateRoute is used to protect routes that require authentication */}
        {/* <Route path="/" element={<PrivateRoute />}>
          <Route path="/chat" element={<ChatBot />} />
        </Route> */}
        <Route path="/" element={<Navigate to="/auth/login" />}/>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
