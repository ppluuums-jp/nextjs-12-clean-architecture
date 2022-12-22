/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import { CrudPage } from "../../../src/presentation/components/pages/crud-page";

describe("should render each of CRUD buttons.", () => {
  it("should render create button", () => {
    render(<CrudPage />);
    expect(screen.getByRole("button", { name: "Create" }).id).toEqual(
      "create-button"
    );
  });

  it("should render read button", () => {
    render(<CrudPage />);
    expect(screen.getByRole("button", { name: "Read" }).id).toEqual(
      "read-button"
    );
  });

  it("should render update button", () => {
    render(<CrudPage />);
    expect(screen.getByRole("button", { name: "Update" }).id).toEqual(
      "update-button"
    );
  });

  it("should render delete button", () => {
    render(<CrudPage />);
    expect(screen.getByRole("button", { name: "Delete" }).id).toEqual(
      "delete-button"
    );
  });
});

describe("should render the title.", () => {
  it("should render a title", () => {
    render(<CrudPage />);
    expect(screen.getByText("CRUD PAGE")).toBeInTheDocument;
  });
});
