import { render, screen } from "@testing-library/react"
import App from './App'

test('renders Hello text', () => {
    render(<App />)
    expect(screen.getByText(/hello/i)).toBeDefined()
})
