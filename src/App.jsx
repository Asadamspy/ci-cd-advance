// src/App.jsx
import './App.css'

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f1f5f9", // light slate background
        padding: "2rem",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#4ade80", marginBottom: "0.5rem" }}>
        Hello, Netlify Auto Deploy 🚀
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "600px" }}>
        Deployed seamlessly using GitHub Actions and Netlify’s CI/CD pipeline.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="https://github.com/Asadamspy/ci-cd-advance"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#4ade80",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background 0.3s",
          }}
          onMouseOver={e => (e.target.style.backgroundColor = "#22c55e")}
          onMouseOut={e => (e.target.style.backgroundColor = "#4ade80")}
        >
          View Source on GitHub
        </a>
      </div>

      <footer style={{ marginTop: "3rem", fontSize: "0.85rem", color: "#94a3b8" }}>
        React · Vite · Vitest · GitHub Actions · Netlify
      </footer>
    </div>
  )

}

export default App
