import { render, screen } from "@testing-library/react";
import React from "react";
import { RoundButton } from "../../../../src/presentation/components/molecules/round-button";

// tests props are passed properly
describe("Test RoundButton props", () => {
  it("be able to pass props properly", () => {
    render(
      <RoundButton
        props={{
          id: "testButton",
          width: "150px",
          height: "100px",
          colorScheme: "blue",
          boxShadow: "initial",
          size: "md",
          variant: "solid",
          rounded: "md",
          text: "RoundButton",
          onClick: () => {},
        }}
      />
    );
    expect(screen.getByRole("button").id).toEqual("testButton");
  });
});
