import React from "react";
import { usePathname } from "next/navigation";

export default function Step({ path }: { path: string }) {
  const pathname = usePathname();

  const steps = [
    { name: "User", page: "/UserForm" },
    { name: "Platform", page: "/CommerceForm" },
    { name: "Final", page: "/Result" },
  ];
  return (
    <>
      <ul className={`steps`}>
        {steps.map((step) => {
          return (
            <li
              className={`step ${pathname === step.page ? `step-primary` : ``}`}
              key={step.name}
            >
              {step.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
