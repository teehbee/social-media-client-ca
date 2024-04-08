import { login } from "./login";

// Mock localStorage

const localStorageMock = {
  setItem: jest.fn(),
  getItem: jest.fn(),
};
global.localStorage = localStorageMock;

// // Mock API fetch

describe(`login function`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`saves the token to localStorage`, async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: "mockToken" }),
      }),
    );

    await login(`notareal@email.com`, `password`);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      `token`,
      JSON.stringify(`mockToken`),
    );
  });
});
