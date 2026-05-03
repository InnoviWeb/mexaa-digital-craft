import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/mexaa-logo.png";

export const SplashScreen = () => {
  const { pathname } = useLocation();
  const [phase, setPhase] = useState<"in" | "out" | "done">("done");

  useEffect(() => {
    if (pathname !== "/") {
      setPhase("done");
      return;
    }
    setPhase("in");
    const t1 = setTimeout(() => setPhase("out"), 1300);
    const t2 = setTimeout(() => setPhase("done"), 1850);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

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
        className="h-20 w-auto animate-splash-logo md:h-32"
      />
    </div>
  );
};
