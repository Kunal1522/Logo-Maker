import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

function SideNav({selectedIndex}) {
  const menuList = [
    { id: 1, name: "Icon", icon: PencilRuler },
    { id: 2, name: "BackGround", icon: Image },
    { id: 3, name: "Upgrade", icon: Shield },
  ];
  const [activeIndex, setactiveIndex] = useState(0);

  return (
    <div className="border shadow-sm h-screen">
      {menuList.map((menu, index) => (
        <h2
          key={index}
          onClick={() => {setactiveIndex(index);
          selectedIndex(index)}}
          className={`p-2 text-lg  my-2 cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white ${
            activeIndex === index && "bg-primary text-white"
          }`}
        >
          <menu.icon className="w-4 h-4" /> 
          {menu.name}
        </h2>
      ))}
    </div>
  );
}

export default SideNav;