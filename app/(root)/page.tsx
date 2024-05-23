import Inner from "@/components/background/_components/inner";
import Middle from "@/components/background/_components/middle";
import Outer from "@/components/background/_components/outer";
import RightBig from "@/components/background/_components/rightBig";
import LoginForm from "./login";
import BgDesign from "@/components/background/background";

export default function Home() {
  return (
    <div>
      <BgDesign />
      <LoginForm />
    </div>
  );
}
