import { render, screen } from "@testing-library/react";
import React from "react";
import { CrudPage } from "../../../../src/presentation/components/pages/crud-page";

describe("Test Crud buttons", () => {
  it("render create button", () => {
    render(<CrudPage />);
    expect(screen.getByRole("button", { name: "Create" }).id).toEqual(
      "create-button"
    );
  });

  it("render read button", () => {
    render(<CrudPage />);
    expect(screen.getByRole("button", { name: "Read" }).id).toEqual(
      "read-button"
    );
  });

  it("render update button", () => {
    render(<CrudPage />);
    expect(screen.getByRole("button", { name: "Update" }).id).toEqual(
      "update-button"
    );
  });

  it("render delete button", () => {
    render(<CrudPage />);
    expect(screen.getByRole("button", { name: "Delete" }).id).toEqual(
      "delete-button"
    );
  });

  it("render four buttons", () => {
    render(<CrudPage />);
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });
});

describe("Test the Title", () => {
  it("render a title", () => {
    render(<CrudPage />);
    expect(screen.getByText("CRUD PAGE")).toBeInTheDocument;
  });
});

// appear properly when a user click a button
