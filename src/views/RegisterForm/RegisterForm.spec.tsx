import { render, screen } from "@testing-library/react";
import RegisterForm from ".";

describe("RegisterForm", () => {
  test("should render all properly", () => {
    render(<RegisterForm />);

    const pageHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading).toBeInTheDocument();

    const usernameElement = screen.getByRole("textbox", {
      name: "Username:",
    });
    expect(usernameElement).toBeInTheDocument();

    const emailElement = screen.getByPlaceholderText("Enter your email");
    expect(emailElement).toBeInTheDocument();

    const passwordElement = screen.getByLabelText("Password:", {
      selector: "input", //if same label on different elements
    });
    expect(passwordElement).toBeInTheDocument();

    const genderElement = screen.getByRole("combobox");
    expect(genderElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const usernameElement2 = screen.getByDisplayValue("John");
    expect(usernameElement2).toBeInTheDocument();

    // const customElement = screen.getByTestId("custom-element");
    // expect(customElement).toBeInTheDocument();
  });
});
