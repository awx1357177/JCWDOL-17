/** @format */

import { UserContext2 } from "@/app/page";
import { IUserContext, UserContext } from "@/contexts/user.context";
import React, { useContext, useEffect } from "react";

export function LocalComponent() {
  const context = useContext<IUserContext | null>(UserContext);
  useEffect(() => {
    context?.setUser("world hello");
  }, []);

  return (
    <div className="mt-4 text-xl font-bold">
      <ChildLocalComponent />
    </div>
  );
}

// type Props2 = { value2: string };

export function ChildLocalComponent() {
  const user = useContext<IUserContext | null>(UserContext);
  const test = useContext<string>(UserContext2);
  return (
    <>
      {user?.user} and {test}
    </>
  );
}
