import React from "react";
import clsx from "clsx";
import "./Backdrop.css";

export function Backdrop(props) {
  const { open, classes, className, invisible, ...rest } = props;
  return (
    <div
      className={clsx("Backdrop", className, classes.root, {
        "Backdrop--open": open,
        "Backdrop--invisible": invisible,
        [classes.invisible]: invisible && classes.invisible,
      })}
      {...rest}
    />
  );
}

Backdrop.defaultProps = {
  classes: {},
};

export default Backdrop;

// @TODO add transition duration properties
/**
 * @typedef {{
 * open: boolean;
 * invisible: boolean;
 * classes: { root: string; invisible: string };
 * transitionDuration: number | { appear?: number; enter?: number; exit?: number }
 * } & import("react").ComponentPropsWithoutRef<"div">} BackdropProps
 */
