import * as useCrudControllerModule from "../../../../src/presentation/controllers/crud-controller";
import {
  toastCreateParams,
  toastDeleteParams,
  toastReadParams,
  toastUpdateParams,
} from "../../../../src/presentation/controllers/lib/toast-params";

describe("[Positive] Test the toast", () => {
  it("crud", async () => {
    const mock = jest
      .spyOn(useCrudControllerModule, "useCrudController")
      .mockReturnValue({
        createUser: () => Promise.resolve(toastCreateParams.success),
        readAllUsers: () => Promise.resolve(toastReadParams.success),
        updateUser: () => Promise.resolve(toastUpdateParams.success),
        deleteUser: () => Promise.resolve(toastDeleteParams.success),
      });
    expect(await useCrudControllerModule.useCrudController().createUser()).toBe(
      toastCreateParams.success
    );
    expect(
      await useCrudControllerModule.useCrudController().readAllUsers()
    ).toBe(toastReadParams.success);
    expect(await useCrudControllerModule.useCrudController().updateUser()).toBe(
      toastUpdateParams.success
    );
    expect(await useCrudControllerModule.useCrudController().deleteUser()).toBe(
      toastDeleteParams.success
    );
  });
});

describe("[Negative] Test the toast", () => {
  it("crud", async () => {
    const mock = jest
      .spyOn(useCrudControllerModule, "useCrudController")
      .mockReturnValue({
        createUser: () => Promise.resolve(toastCreateParams.errorException),
        readAllUsers: () => Promise.resolve(toastReadParams.errorException),
        updateUser: () => Promise.resolve(toastUpdateParams.errorException),
        deleteUser: () => Promise.resolve(toastDeleteParams.errorException),
      });
    expect(await useCrudControllerModule.useCrudController().createUser()).toBe(
      toastCreateParams.errorException
    );
    expect(
      await useCrudControllerModule.useCrudController().readAllUsers()
    ).toBe(toastReadParams.errorException);
    expect(await useCrudControllerModule.useCrudController().updateUser()).toBe(
      toastUpdateParams.errorException
    );
    expect(await useCrudControllerModule.useCrudController().deleteUser()).toBe(
      toastDeleteParams.errorException
    );
  });
});
