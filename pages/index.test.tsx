import * as ReactTestingLibrary from "@testing-library/react";
import IndexPage from "./";

describe("example test", () => {
  it("renders a hello message", () => {
    const { getByText } = ReactTestingLibrary.render(<IndexPage />);
    expect(getByText("Hello, World!")).toBeVisible();
  });
});
