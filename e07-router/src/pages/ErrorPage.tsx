import { type FC } from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export const ErrorPage: FC = () => {
  const error = useRouteError();

  let errorMessage: string;
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    // Error z routeru (např. 404, 500)
    errorMessage = error.statusText || error.data?.message || "Unknown error";
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error occurred";
  }

  return (
    <div style={{ 
      padding: "2rem", 
      textAlign: "center",
      color: "#721c24",
      backgroundColor: "#f8d7da",
      border: "1px solid #f5c6cb",
      borderRadius: "4px",
      margin: "2rem"
    }}>
      <h1>Chyba!</h1>
      {errorStatus && <h2>Chyba {errorStatus}</h2>}
      <p style={{ fontSize: "1.1em", marginTop: "1rem" }}>
        <strong>{errorMessage}</strong>
      </p>
      <p style={{ marginTop: "2rem" }}>
        <Link to="/" style={{ 
          color: "#721c24", 
          textDecoration: "underline",
          fontWeight: "bold"
        }}>
          ← Zpět na domovskou stránku
        </Link>
      </p>
      {import.meta.env.DEV && error instanceof Error && (
        <details style={{ 
          marginTop: "2rem", 
          textAlign: "left",
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "4px"
        }}>
          <summary style={{ cursor: "pointer", fontWeight: "bold" }}>
            Stack trace (dev only)
          </summary>
          <pre style={{ 
            overflow: "auto", 
            fontSize: "0.85em",
            marginTop: "1rem"
          }}>
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  );
};

export default ErrorPage;
