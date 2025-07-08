// src/App.test.jsx
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import App from "./App"

describe("App component", () => {
  test("renders Hello text", () => {
    render(<App />)
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
})
