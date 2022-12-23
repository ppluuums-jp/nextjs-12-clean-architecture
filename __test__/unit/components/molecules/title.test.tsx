import { render, screen } from "@testing-library/react";
import React from "react";
import { Title } from "../../../../src/presentation/components/molecules/title";

// tests props are passed properly
describe("Test Title props", () => {
  it("be able to pass props properly", () => {
    render(<Title props={{ id: "title", title: "Test Title" }} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument;
  });
});
