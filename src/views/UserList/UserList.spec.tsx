import { render, screen, waitFor } from "@testing-library/react";
import UserList from ".";
import nock from "nock";
import { mockUserList } from "../../mocks";

describe("UserList", () => {
  it("should render user list", async () => {
    const scope = nock("https://jsonplaceholder.typicode.com")
      .get("/users")
      .reply(200, mockUserList, { "Access-Control-Allow-Origin": "*" });

    render(<UserList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      const userListItem = screen.getAllByRole("listitem");
      expect(userListItem).toHaveLength(mockUserList.length);
    });

    expect(scope.isDone()).toBeTruthy();
  });
});
