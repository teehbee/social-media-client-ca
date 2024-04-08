import { logout } from "./logout";

import "./mock";

describe(`logout function`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(`clears token from localStorage`, async () => {
    await logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith(`token`);
  });
});
