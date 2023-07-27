import {
  UserTokenStructureMock,
  initialStateMock,
} from "../../mocks/userMocks";
import { setUser, userReducer } from "./uiSlice";

describe("Given a userReducer", () => {
  describe("When it receives an empty user state and a setUser action with a user and its data", () => {
    test("Then it should return a new state with the user data set", () => {
      const currentUserState = initialStateMock;

      const expectedNewUserState = {
        name: UserTokenStructureMock.name,
        id: UserTokenStructureMock.id,
        token: UserTokenStructureMock.token,
      };

      const newUserState = userReducer(
        currentUserState,
        setUser(UserTokenStructureMock)
      );

      expect(newUserState).toEqual(expectedNewUserState);
    });
  });
});
