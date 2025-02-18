import { MonitorCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = (props: { url?: string }) => {
  const { url = "/" } = props;
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <Link to={url}>
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <MonitorCheck strokeWidth={2.5} className="size-3.5" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
