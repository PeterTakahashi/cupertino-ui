"use client";

import { BellIcon, PaletteIcon, WifiIcon } from "lucide-react";
import { List, ListItem } from "@/registry/cupertino-ui/list";
import {
  NavigationLink,
  NavigationStack,
} from "@/registry/cupertino-ui/navigation-stack";
import { Switch } from "@/registry/cupertino-ui/switch";

function WifiScreen() {
  return (
    <List>
      <ListItem detail={<Switch defaultChecked className="scale-[0.85]" />}>
        Wi-Fi
      </ListItem>
      <ListItem detail="Connected" chevron onClick={() => {}}>
        HomeNetwork
      </ListItem>
    </List>
  );
}

function NotificationsScreen() {
  return (
    <List footer="Choose when notification previews appear.">
      <NavigationLink
        title="Show Previews"
        destination={
          <List>
            <ListItem detail="✓">Always</ListItem>
            <ListItem>When Unlocked</ListItem>
            <ListItem>Never</ListItem>
          </List>
        }
        detail="Always"
      />
      <ListItem detail={<Switch className="scale-[0.85]" />}>
        Scheduled Summary
      </ListItem>
    </List>
  );
}

export default function NavigationStackDemo() {
  return (
    <NavigationStack
      title="Settings"
      className="w-80 rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
    >
      <List>
        <NavigationLink
          title="Wi-Fi"
          destination={<WifiScreen />}
          icon={<WifiIcon />}
          detail="HomeNetwork"
        />
        <NavigationLink
          title="Notifications"
          destination={<NotificationsScreen />}
          icon={<BellIcon />}
          iconColor="var(--system-red)"
        />
        <NavigationLink
          title="Appearance"
          destination={
            <List>
              <ListItem>Light</ListItem>
              <ListItem detail="✓">Dark</ListItem>
            </List>
          }
          icon={<PaletteIcon />}
          iconColor="var(--system-indigo)"
        />
      </List>
    </NavigationStack>
  );
}
