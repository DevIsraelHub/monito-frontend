import { Info } from "lucide-react";
import { Card, CardHeader } from "../ui/card";

const GoogleOauthButton = () => {

  return (
    <Card
      className="w-full"
    >
      <CardHeader className="flex flex-col text-sm gap-2">
        <span className="flex flex-row items-center gap-2"><Info size={16} /> Use this credentials for easy login :</span>
        <div className="flex flex-row items-center gap-2">
          <div className="text-sm text-muted-foreground flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2" >
              Email:  <span className="font-bold">john@gmail.com</span>
            </div>
            <div className="flex flex-row items-center gap-2" >
              Password <span className="font-bold">john</span>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default GoogleOauthButton;
