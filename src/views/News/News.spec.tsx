import { logRoles, render, screen } from "@testing-library/react";
import News from ".";
import { mockNewsData } from "../../mocks";

describe("News", () => {
  it("should render news cards", () => {
    const { container } = render(<News news={mockNewsData} />);

    // logRoles(container);

    const newsWrapper = screen.getByRole("list");
    expect(newsWrapper).toBeInTheDocument();

    const allNewsCard = screen.getAllByRole("listitem");
    expect(allNewsCard.length).toBe(mockNewsData.length);
  });
});
