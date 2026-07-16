import { Button } from "@/registry/apple-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/apple-ui/card";

export default function CardDemo() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Screen Time</CardTitle>
        <CardDescription>Daily average · 2h 46m</CardDescription>
      </CardHeader>
      <CardContent>
        Your screen time was down 12% last week, for an average of 2 hours,
        46 minutes a day.
      </CardContent>
      <CardFooter>
        <Button variant="tinted" size="sm">See All Activity</Button>
      </CardFooter>
    </Card>
  );
}
