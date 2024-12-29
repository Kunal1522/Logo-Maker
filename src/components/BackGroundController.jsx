import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
const BackGroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const { updateStorage, setupdateStorage } = useContext(UpdateStorageContext);
  const [rounded, setrounded] = useState(storageValue?storageValue?.bgRounded:0);
  const [padding, setpadding] = useState(storageValue?storageValue?.bgPadding:40);
  const [color, setcolor] = useState(storageValue?storageValue?.bgColor:"#000");

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    localStorage.setItem("value", JSON.stringify(updateValue));
    if (setupdateStorage) {
      setupdateStorage(updateValue);
    }
  });
  return (
    <div>
      <div className="py-2">
        <label
          className="p-2 
         flex justify-between items-center"
        >
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(event) => setrounded(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex   justify-between items-center">
          Padding<span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(event) => setpadding(event[0])}
        />
      </div>
      <div className="py-2  px-2">
        <label className="p-2 flex justify-between items-center">
          Icon Color
        </label>
        <ColorPickerController
          className="md:max-w-6 max-h-6"
          hideController={false}
          selectedColor={(color) => setcolor(color)}
        />
      </div>
    </div>
  );
};

export default BackGroundController;
