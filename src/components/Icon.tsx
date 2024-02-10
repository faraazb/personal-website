import classnames from "classnames";
import type { SVGProps } from "preact/compat";
import { icons, type Name } from "@icons/types";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: Name;
  presetSize?: "default" | "medium";
}

export function Icon(props: IconProps) {
  const {
    name,
    presetSize,
    class: classProp,
    className,
    ...svgAttributes
  } = props;
  const classNames = classnames(
    "icon",
    className?.toString(),
    classProp?.toString(),
    presetSize ? `icon--${presetSize}` : null,
  );

  const Component = icons[name];
  return <Component className={classNames} {...svgAttributes} />;
}
