import Cart from "@/components/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiUser } from "react-icons/fi";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Cart />
      {/* <FiUser className="text-secondary w-5 h-5" /> */}
      <Input
        type="email"
        id="email"
        placeholder="USERNAME"
        className="w-[300px] mt-12"
      />
      <Input
        type="email"
        id="email"
        placeholder="PASSWORD"
        className="w-[300px] mt-6"
      />
      <Button className="w-[300px] mt-10" variant={'default'}>
        LOGIN
      </Button>
      <p className="text-white mt-2 text-right w-[300px]">Forgot Password?</p>
    </div>
  );
};

export default LoginForm;
