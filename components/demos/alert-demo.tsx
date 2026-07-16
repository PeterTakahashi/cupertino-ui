import { BatteryLowIcon, WifiOffIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/registry/cupertino-ui/alert";

export default function AlertDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Alert variant="warning">
        <BatteryLowIcon />
        <AlertTitle>Low Battery</AlertTitle>
        <AlertDescription>
          20% battery remaining. Low Power Mode can extend your battery life.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <WifiOffIcon />
        <AlertTitle>Not Connected</AlertTitle>
        <AlertDescription>
          Your internet connection appears to be offline.
        </AlertDescription>
      </Alert>
    </div>
  );
}
