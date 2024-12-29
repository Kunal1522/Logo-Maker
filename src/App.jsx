import React, { useContext, useState } from "react";
import Header from "./components/ui/Header";
import SideNav from "./components/ui/SideNav";
import BackGroundController from "./components/BackGroundController";
import IconController from "./components/IconController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
const App = () => {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [updateStorage, setupdateStorage] = useState({});
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setupdateStorage }}>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Side Navigation */}
          <div className="w-48 bg-gray-100 border-r">
            <SideNav selectedIndex={(value) => setselectedIndex(value)} />
          </div>

          {/* Main Grid Layout */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-6">
            {/* Left Panel (Scrollable Content for IconController) */}
            <div className="md:col-span-2 border-r shadow-sm h-full overflow-y-auto">
              {selectedIndex === 0 ? <IconController /> : <BackGroundController />}
            </div>

           
            <div className="md:col-span-3 flex items-center justify-center bg-gray-50">
              <LogoPreview />
            </div>

            {/* Right Panel (Ads Section) */}
            <div className="md:col-span-1 bg-blue-300 flex items-center justify-center">
              Ads Banner
            </div>
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
};

export default App;
