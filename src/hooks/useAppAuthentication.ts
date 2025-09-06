import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./useAppReduxHooks";
import { authenticationActions } from "../redux/authentication/slice";
import { auth } from "../interfaces";

export const useAppAuthentication = () => {
  const dispatch = useAppDispatch();
  const authentication = useAppSelector((state) => state.authentication);

  const loginUser = useCallback(({ user, token }: auth) => {
    dispatch(authenticationActions.update({ user, token, isAuthenticated: true }));
  }, [dispatch]);

  const logoutUser = useCallback(() => {
    dispatch(authenticationActions.reset())
  }, [dispatch]);

  return { ...authentication, loginUser, logoutUser };
};
