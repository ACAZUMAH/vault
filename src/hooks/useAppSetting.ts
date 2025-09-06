import { useAppDispatch, useAppSelector } from "./useAppReduxHooks";
import { settingActions } from "../redux/setting/slice";
import { theme } from "../constants/theme/theme";

export const useAppSettings = () => {
  const dispatch = useAppDispatch();
  const setting = useAppSelector((state) => state.setting);

  const toggleTheme = () => {
    if (setting.darkMode) {
      dispatch(settingActions.update({ darkMode: false }));
    } else {
      dispatch(dispatch(settingActions.update({ darkMode: true })));
    }
  };

  const themeObject = setting.darkMode ? theme.dark : theme.light

  const colorScheme: "dark" | "light" | undefined = setting.darkMode
    ? "dark"
    : "light";

  return { ...setting, toggleTheme, colorScheme, themeObject };
};
