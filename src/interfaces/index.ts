import { MantineThemeOverride } from "@mantine/core";

export interface Theme {
    dark: MantineThemeOverride
    light: MantineThemeOverride
}

export interface auth {
    user?: any,
    token?: string
}