import { ButtonProps } from "@/app/lib/types";
import { FC } from "react";

const Button: FC<ButtonProps> = ({
  className,
  children,
  customStyle = "",
  ...props
}) => (
  <button
    {...props}
    className={`flex items-center justify-center whitespace-nowrap font-medium uppercase tracking-widest transition ${className} ${customStyle}`}
  >
    {children}
  </button>
);

export const ButtonRegular: FC<ButtonProps> = ({
  className,
  children,
  customStyle = "",
  ...props
}) => (
  <Button
    customStyle={customStyle}
    className={`desktop:h-14 desktop:text-base h-12 px-8 text-xs ${className}`}
    {...props}
  >
    {children}
  </Button>
);

export const ButtonPrimary: FC<ButtonProps> = ({
  className,
  customStyle = "desktop:rounded-lg rounded border bg-neutral-50 border-white/55 hover:bg-neutral-900 active:bg-neutral-500 disabled:border-none disabled:bg-neutral-700",
  ...props
}) => (
  <ButtonRegular
    customStyle={customStyle}
    {...props}
    className={`text-neutral-800 hover:text-neutral-50 active:text-neutral-800 disabled:text-neutral-500 ${className}`}
  />
);
