import { render, screen } from "@testing-library/react";
import ActionButton from ".";
import userEvent from "@testing-library/user-event";

describe("ActionButton", () => {
  it("should render the action button", async () => {
    const mockFunction = jest.fn();

    render(<ActionButton label="Send" onClick={mockFunction} />);
    const sendButton = screen.getByRole("button", { name: "Send" });

    await userEvent.click(sendButton);

    expect(mockFunction).toHaveBeenCalled();
  });
});
