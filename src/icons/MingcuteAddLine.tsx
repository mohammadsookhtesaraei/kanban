import { type SVGProps } from 'react';

function MingcuteAddLine(props: SVGProps<SVGSVGElement>): React.JSX.Element {
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
        d="M5 12h14m-7 7V5"
      />
    </svg>
  );
}
export default MingcuteAddLine;
