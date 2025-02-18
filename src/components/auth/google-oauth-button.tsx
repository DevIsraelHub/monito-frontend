import { baseURL } from "@/lib/base-url";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleOauthButton = (props: { label: string }) => {
  const { label } = props;

  const handleClick = () => {
    window.location.href = `${baseURL}/auth/google`;
  };
  return (
    <Button
      onClick={handleClick}
      variant="outline"
      type="button"
      className="w-full"
    >
      <FcGoogle />
      {label} with Google
    </Button>
  );
};

export default GoogleOauthButton;
