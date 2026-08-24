import { type SVGProps } from 'react';

export function MingcuteCloseLine(
  props: SVGProps<SVGSVGElement>
): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE */}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="m5.636 5.637l12.728 12.728m-12.728 0L18.364 5.637"
      />
    </svg>
  );
}
export default MingcuteCloseLine;
