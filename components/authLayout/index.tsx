import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};
export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};
