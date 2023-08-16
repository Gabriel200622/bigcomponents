import { Avatar, AvatarFallback, AvatarImage } from "@bigcomponents/core";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/Gabriel200622.png" alt="@biggabo" />
      <AvatarFallback>BG</AvatarFallback>
    </Avatar>
  );
}
