import React from "react";
import { Button } from "./button";
import { Download } from "lucide-react";

function Header() {
  return (
    <div className="p-2 shadow-sm border flex justify-between  ">
      <img src="/logo.svg" style={{width:"120px"}} />
      <Button className="flex gap-2 items-center">
        <Download className="h-4 w-4" />
        Download
      </Button>
    </div>
  );
}

export default Header;
