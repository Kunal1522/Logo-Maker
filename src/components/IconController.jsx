import { Smile, SmileIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPicker from "react-best-gradient-color-picker";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconPop from "./IconPop";

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const { updateStorage, setupdateStorage } = useContext(UpdateStorageContext);
  const [size, setsize] = useState(storageValue?storageValue?.iconSize:280);
  const [rotate, setrotate] = useState(storageValue?storageValue?.iconRotate:0);
  const [color, setcolor] = useState(storageValue?storageValue?.iconColor:"#fff");

 
  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: "Smile",
    };
    // setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
    if (setupdateStorage) {
      setupdateStorage(updatedValue);
    }
  }, [rotate, size, color]);
  return (
    <div className="flex-col justify-between">
   <IconPop/>
      <div className="ml-2 py-2 mr-2">
        <label className="p-2 flex justify-between items-center">
          Size <span>{size} px</span>
        </label>
        <Slider
          defaultValue={[size]}
          max={512}
          step={1}
          onValueChange={(event) => {
            setsize(event[0]);
          }}
        />
      </div>
      <div className="ml-2 py-2 mr-2 ">
        <label className="p-2 flex justify-between items-center">
          Rotate <span>{rotate} °</span>
        </label>
        <Slider
          defaultValue={[rotate]}
          max={360}
          step={1}
          onValueChange={(event) => setrotate(event[0])}
        />
      </div>
      <div className="py-2 ml-2 ">
        <label className="p-2 flex justify-between items-center">
          Icon Color
        </label>
        <div className="flex-col items-center justify-center overflow-hidden max-w-full">
          <ColorPickerController
            className=" z-10 max-w-[90%] max-h-[100%] shadow-lg"
            hideController={true}
            selectedColor={(color) => setcolor(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default IconController;
