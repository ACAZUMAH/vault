import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { routesEndpoints } from "../constants";
import { store } from "../redux/store";

type CustomLoaderFunction = (
  loaderArgs: LoaderFunctionArgs
) => Promise<ReturnType<typeof redirect> | null>;

export const routesProtector = () => {
  const protectorArray: CustomLoaderFunction[] = [];

  const processFlow = async (loaderArgs: LoaderFunctionArgs) => {
    const promises = protectorArray.map((protector) => protector(loaderArgs));
    const results = await Promise.all(promises);
    const redirectResult = results.find((result) => result?.status === 302);
    return redirectResult || null;
  };

  processFlow.requireLoggedIn = () => {
    protectorArray.push(async () => {
      const authentication = store.getState().authentication;

      if (!authentication.isAuthenticated) {
        return redirect(routesEndpoints.SAVE);
      }

      return null;
    });
    return processFlow;
  };

    processFlow.requireNotLoggedIn = () => {
        protectorArray.push(async () => {
        const authentication = store.getState().authentication;
    
        if (authentication.isAuthenticated) {
            return redirect(routesEndpoints.HOME);
        }
    
        return null;
        });
        return processFlow;
    };

    return processFlow;
};
