"use client";

import { Bluetooth, Plane, Wifi } from "lucide-react";
import { List, ListItem } from "@/registry/cupertino-ui/list";
import { Switch } from "@/registry/cupertino-ui/switch";

export default function ListDemo() {
  return (
    <List header="Connectivity" footer="Turning on Airplane Mode disables all wireless connections." className="w-80">
      <ListItem
        icon={<Plane />}
        iconColor="var(--system-orange)"
        detail={<Switch className="scale-[0.85]" />}
      >
        Airplane Mode
      </ListItem>
      <ListItem icon={<Wifi />} detail="HomeNetwork" chevron onClick={() => {}}>
        Wi-Fi
      </ListItem>
      <ListItem icon={<Bluetooth />} detail="On" chevron onClick={() => {}}>
        Bluetooth
      </ListItem>
    </List>
  );
}
