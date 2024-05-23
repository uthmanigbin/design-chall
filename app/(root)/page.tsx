import Inner from "@/components/inner";
import Middle from "@/components/middle";
import Outer from "@/components/outer";
import RightBig from "@/components/rightBig";
import LoginForm from "./login";

export default function Home() {
  return (
    <div>
      <RightBig />
      <Outer />
      <Middle />
      <Inner />
      <LoginForm />
    </div>
  );
}
