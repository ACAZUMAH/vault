//import React from 'react'

import { ActionIcon, Avatar, Group, Menu, Text } from "@mantine/core";
import { IconLogout, IconUserCircle } from "@tabler/icons-react";

export const MainDropDown = () => {
  return (
    <>
      <Menu width={300} offset={21} position="bottom-end">
        <Menu.Target>
          {/* <Button
            variant="transparent"
            leftSection={<IconUserCircle stroke={1.5} />}
          ></Button> */}
          <ActionIcon radius="xl" variant="light">
            <IconUserCircle stroke={1.5} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            {/* <Anchor
              p={10}
              leftSection={<Avatar size="lg" variant="light" />}
            /> */}
            <Group p={10} >
              <Avatar size="lg" variant="light" />
              <Text>Developer</Text>
            </Group>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item p={10}>Profile</Menu.Item>
          <Menu.Item p={10}>Job preference</Menu.Item>
          <Menu.Item p={10}>Account Settings</Menu.Item>
          <Menu.Item p={10}>Help Center</Menu.Item>
          <Menu.Item p={10} color="red" rightSection={<IconLogout />}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
