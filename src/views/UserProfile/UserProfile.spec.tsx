import { render, screen } from "@testing-library/react";
import UserProfile from ".";
import { UserProvider } from "../../providers/UserProvider";

describe("Userprofile", () => {
  it("should render without error", () => {
    render(
      <UserProvider>
        <UserProfile />
      </UserProvider>
    );

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Guest");
  });
});
