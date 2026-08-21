import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "30px",
          background: "#f1f5f9",
        }}
      >
        <AppRoutes />
      </main>
    </div>
  );
}