import { login } from "./login";

import "./mock";

// Mock localStorage

// // Mock API fetch

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("saves the token to localStorage", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: "mockToken" }),
      }),
    );

    await login("notareal@email.com", "password");

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("mockToken"),
    );
  });
});
