import { type SVGProps, memo } from 'react';

function MingcuteEdit2Line(props: SVGProps<SVGSVGElement>): React.JSX.Element {
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
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12.17 6.17l-7.88 7.881a1 1 0 0 0-.294.707v5.243H9.24a1 1 0 0 0 .707-.293l7.88-7.88M12.17 6.17l2.433-2.433a1 1 0 0 1 1.414 0L20.26 7.98a1 1 0 0 1 0 1.414l-2.433 2.433M12.17 6.17l5.657 5.657"
      />
    </svg>
  );
}
export default memo(MingcuteEdit2Line);
