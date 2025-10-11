import React from "react";
import LanguageIcon from "../components/icons/LanguageIcon";
import CollaborateIcon from "../components/icons/CollaborateIcon";
import SupportIcon from "../components/icons/SupportIcon";

const InfoSection = ({ sectionId }: { sectionId: string }) => {
  return (
    <section
      className="py-8 px-6 text-chiefnavy bg-white text-2xl"
      id={sectionId}
    >
      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center w-2/3 md:w-1/5">
          <h4 className="text-center mb-6 font-gilroy">
            Chat natively in your own language
          </h4>
          <LanguageIcon />
        </div>
        <div className="flex flex-col items-center w-2/3 md:w-1/5">
          <h4 className="text-center mb-6 font-gilroy">
            Collaborate and manage all records in one single place.
          </h4>
          <CollaborateIcon />
        </div>
        <div className="flex flex-col items-center w-2/3 md:w-1/5">
          <h4 className="text-center mb-6 font-gilroy">
            Stay ahead of your guests to ensure exceptional support
          </h4>
          <SupportIcon />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
