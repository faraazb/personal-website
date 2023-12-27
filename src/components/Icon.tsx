import classnames from "classnames";
import type { SVGProps } from "preact/compat";
import { icons, type Name } from "@icons/types";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: Name;
}

export function Icon(props: IconProps) {
  const { name, class: classProp, className, ...svgAttributes } = props;
  const classNames = classnames("icon", { className }, { classProp });

  const Component = icons[name];
  return <Component className={classNames} {...svgAttributes} />;
}
