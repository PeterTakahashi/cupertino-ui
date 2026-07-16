import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/apple-ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/apple.png" alt="Apple" />
        <AvatarFallback>AP</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JA</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback>SW</AvatarFallback>
      </Avatar>
    </div>
  );
}
