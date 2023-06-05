import React from "react";

const LevelCard = ({ level }) => {
  return (
    <div className="bg-gray aspect-[1/.65] rounded-lg w-[20%] text-light-primary flex items-center justify-center">
      <p className="text-light-primary text-2xl font-medium">{level}</p>
    </div>
  );
};

export default LevelCard;
