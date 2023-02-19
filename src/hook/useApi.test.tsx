import { useAppDispatch } from "../store/hooks";
import { server } from "../mocks/setUpServer";
import { renderHook } from "@testing-library/react";
import Wrapper from "../mocks/wrapper";
import useApi from "./useApi";

jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppDispatch: jest.fn(),
}));

beforeAll(() => server.listen());

afterAll(() => server.close());

describe("Given a custom useApi hook", () => {
  describe("When its function getRobot is invoked", () => {
    test("Then the dispatch should be called", async () => {
      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await getRobots();

      expect(useAppDispatch).toHaveBeenCalled();
    });
  });
});
