import { prettyDOM, render, screen } from "@testing-library/react";
import ToggleComponent from ".";

describe("Toggle", () => {
  it("should work as expected", () => {
    render(<ToggleComponent />);

    const infoElement = screen.queryByText("This is a toggled element!");
    expect(infoElement).not.toBeInTheDocument();
  });

  it("should show info element", async () => {
    render(<ToggleComponent />);

    // console.log(prettyDOM());

    const infoElement = await screen.findByText("This is a toggled element!");
    expect(infoElement).toBeInTheDocument();

    // console.log(prettyDOM());
  });
});
