import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image src="/hotel-logo.svg" alt="logo" width={40} height={40} />
      <span className="text-xl font-bold">Helton</span>
    </div>
  );
};
