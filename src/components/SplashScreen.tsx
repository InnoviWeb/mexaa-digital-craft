import { useEffect, useState } from "react";
import logo from "@/assets/mexaa-logo.png";

export const SplashScreen = () => {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    if (sessionStorage.getItem("mexaa-splash-shown")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("mexaa-splash-shown", "1");
    const t1 = setTimeout(() => setPhase("out"), 1400);
    const t2 = setTimeout(() => setPhase("done"), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        phase === "out" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={logo}
        alt="MEXAA-IT"
        className="h-24 w-auto animate-splash-logo md:h-32"
      />
    </div>
  );
};
