import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
function LogoPreview() {
  const [storageValue, setstorageValue] = useState();
  const { updateStorage, setupdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    console.log(storageData);
    setstorageValue(storageData);
  }, [updateStorage]);
  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    console.log(`${name}`);
    if (!name || !icons[name]) {
      console.log(`Icon "${name}" not found. Using default icon.`);
      return <div>No icon found</div>; // Display a fallback message or icon
    }

    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300">
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon} // Ensure icon name is passed correctly
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
