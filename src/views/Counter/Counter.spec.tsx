import { render, screen } from "@testing-library/react";
import Counter from ".";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("should render correctly", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", {
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();

    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });
    expect(decrementButton).toBeInTheDocument();
  });

  it("should render initial count", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", {
      level: 2,
    });
    expect(heading).toHaveTextContent("Counter: 0");
  });

  it("should increase and decrease count by buttons", async () => {
    userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    const heading = screen.getByRole("heading", {
      level: 2,
    });
    expect(heading).toHaveTextContent("Counter: 0");

    await userEvent.click(incrementButton);

    expect(heading).toHaveTextContent("Counter: 1");

    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await userEvent.click(decrementButton);

    expect(heading).toHaveTextContent("Counter: 0");
  });

  it("should increase count by input value", async () => {
    userEvent.setup();

    render(<Counter />);

    const heading = screen.getByRole("heading", {
      level: 2,
    });

    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "123");

    const addButton = screen.getByRole("button", { name: "Add" });
    await userEvent.click(addButton);

    expect(heading).toHaveTextContent("Counter: 123");
  });
});
