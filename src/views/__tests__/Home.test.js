import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("button has correct text", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/upload/i);
});

test("button loads upload page", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/home/i);
    expect(screen.getByText(/drag and drop a file/i)).toBeInTheDocument;
});
