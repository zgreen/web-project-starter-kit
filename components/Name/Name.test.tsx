import { render, waitFor } from "@testing-library/react";
import { Name } from "./Name";

// establish API mocking before all tests
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: "Jane" }),
    })
  ) as jest.Mock;
});

afterAll(() => {
  (global.fetch as jest.Mock).mockReset();
});

describe("Name", () => {
  it("fetches and renders the name", async () => {
    const { getByText } = render(<Name />);
    await waitFor(() => expect(getByText("Your name is Jane!")).toBeVisible());
  });
});
