import { icons, Smile } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function IconPop() {
  const [openDialog, setopenDialog] = useState(false);
  return (
    <div>
      <div>
        <label className="ml-3">Icon</label>
        <div
          onClick={() => setopenDialog(true)}
          className="p-3 my-2 cursor-pointer bg-gray-200 rounded-md w-[50px] 
            h-[50px] flex items-center justify-centre ml-3"
        >
          {" "}
          <Smile />{" "}
        </div>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconPop;
