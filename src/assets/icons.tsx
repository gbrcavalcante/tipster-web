import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

// Cartão Amarelo
export const YellowCardIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 10 14" fill="none" {...props}>
    <g>
      <path d="M10 0H0V14H10V0Z" fill="#C7921F" />
    </g>
  </svg>
);

// Cartão Vermelho
export const RedCardIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 10 14" fill="none" {...props}>
    <g>
      <path d="M10 0H0V14H10V0Z" fill="#C7361F" />
    </g>
  </svg>
);

// Gol
export const GoalIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...props}>
    <g clipPath="url(#clip0)">
      <path
        d="M9.49999 5.83008L6.73999 6.83008V9.85008L8.81999 10.6601L10.89 8.37008L9.49999 5.83008Z"
        fill="currentColor"
      />
      <path
        d="M7 0C3.14 0 0 3.14 0 7C0 10.86 3.14 14 7 14C10.86 14 14 10.86 14 7C14 3.14 10.86 0 7 0ZM7 12.26C6.03 12.26 5.12 11.99 4.34 11.53L4.59 10.15L3.04 8.42L2.1 8.9C1.87 8.31 1.74 7.67 1.74 7C1.74 6.94 1.74 6.88 1.74 6.83L3.75 6.11L4.41 3.63L3.49 3.08C4.42 2.25 5.64 1.73 6.99 1.73C7.09 1.73 7.18 1.73 7.28 1.74L6.99 2.81L9.71 3.96L10.59 3.15C11.61 4.11 12.26 5.47 12.26 6.98C12.26 9.88 9.9 12.25 7 12.25V12.26Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Gol Contra
export const OwnGoalIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...props}>
    <g>
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={14}
        height={14}
      >
        <path d="M14 0H0V14H14V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M11 0H10V2.25H1.25V5.73C0.48 6.61 0 7.75 0 9C0 11.76 2.24 14 5 14C7.76 14 10 11.76 10 9C10 6.24 7.76 4 5 4C4.19 4 3.43 4.21 2.75 4.56V3.75H10V6H11L14 3L11 0ZM5.2 5.24L4.99 6.01L6.93 6.83L7.55 6.25C8.28 6.94 8.74 7.91 8.74 8.99C8.74 11.06 7.05 12.75 4.98 12.75C4.29 12.75 3.65 12.56 3.09 12.22L3.27 11.23L2.16 9.99L1.49 10.33C1.33 9.91 1.23 9.46 1.23 8.97V8.84L2.67 8.33L3.14 6.56L2.49 6.17C3.16 5.58 4.03 5.21 4.99 5.21C5.06 5.21 5.12 5.21 5.2 5.21V5.24Z"
          fill="#C7361F"
        />
        <path
          d="M7.77957 9.99L6.77957 8.16L4.80957 8.88V11.04L6.29957 11.61L7.77957 9.99Z"
          fill="#C7361F"
        />
      </g>
    </g>
  </svg>
);

// Gol de Pênalti
export const PenaltyGoalIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...props}>
    <g>
      <path
        d="M8.77941 8.42993L6.89941 9.10993V11.1699L8.30941 11.7199L9.72941 10.1599L8.77941 8.42993Z"
        fill="currentColor"
      />
      <path
        d="M7.06981 4.44995C4.43981 4.44995 2.2998 6.58995 2.2998 9.21995C2.2998 11.85 4.43981 13.99 7.06981 13.99C9.69981 13.99 11.8398 11.85 11.8398 9.21995C11.8398 6.58995 9.69981 4.44995 7.06981 4.44995ZM7.06981 12.82C6.40981 12.82 5.7898 12.64 5.2498 12.32L5.4198 11.38L4.3598 10.2L3.7198 10.53C3.5598 10.13 3.4798 9.68995 3.4798 9.23995C3.4798 9.19995 3.4798 9.15995 3.4798 9.11995L4.8498 8.62995L5.2998 6.93995L4.6698 6.56995C5.3098 5.99995 6.1398 5.64995 7.0598 5.64995C7.12981 5.64995 7.1898 5.64995 7.2598 5.64995L7.0598 6.37995L8.9198 7.15995L9.5198 6.60995C10.2198 7.26995 10.6598 8.18995 10.6598 9.22995C10.6598 11.21 9.04981 12.82 7.06981 12.82Z"
        fill="currentColor"
      />
      <path d="M14 6.75H12.5V1.5H1.5V6.75H0V0H14V6.75Z" fill="currentColor" />
    </g>
  </svg>
);

// Pênalti Perdido
export const PenaltyMissedIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" {...props}>
    <path
      d="M12.6667 0H12H1.33333H0V6H1.33333V1.33333H12V6H13.3333V0H12.6667Z"
      fill="#EF4444"
    />
    <path
      d="M9.27328 5.44666L6.65995 8.06666L4.07328 5.47999L3.13328 6.42666L5.71328 9.00666L3.11328 11.6133L4.05995 12.5533L6.65995 9.95332L9.25995 12.5533L10.1999 11.6133L7.59995 9.00666L10.2199 6.39332L9.27328 5.44666Z"
      fill="#EF4444"
    />
  </svg>
);

// Assistência
export const AssistIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="m10.5 13.01 1.5 1.5-2.5.5-.5-.5 1.5-1.5zM7.92 1v1l2 1h2l1 6 1.5 4.5-1 1-10-10L5.92 1h2zM8 10.51l1.5 1.5-2.5.5-.5-.5 1.5-1.5zm-2.5-2.5L7 9.51l-2.5.5-.5-.5 1.5-1.5zm5.93.19H9.08l1.41 1.41h1.18l-.24-1.41zM3 5.51l1.5 1.5-2.5.5-.5-.5L3 5.51zm7.91-.01H6.43l1.41 1.41h3.31l-.24-1.41z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

// Substituição
export const SubstitutionIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...props}>
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3.6V6H3L0 3L3 0H4V2.4"
        fill="#C7361F"
      />
      <path d="M10.25 6H11.75V2.25H4V3.75H10.25V6Z" fill="#C7361F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10.4V8H11L14 11L11 14H10V11.6"
        fill="#15B168"
      />
      <path d="M2.25 11.75H10V10.25H3.75V8H2.25V11.75Z" fill="#15B168" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// VAR
export const VarIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" {...props}>
    <path
      d="M14.667 2.667V12h-3.334v1.333H4.667V12H1.333V2.667h13.334zm-11.84 2.42h-.734c-.046 0-.06.02-.046.06L3.38 9.52c.013.047.04.067.08.067h1.22c.04 0 .067-.027.08-.067L6.1 5.147c.013-.04-.007-.06-.047-.06h-.72c-.04 0-.066.02-.08.06L4.167 8.853H4L2.907 5.147c-.014-.04-.04-.06-.08-.06zm5.733 0H7.373c-.04 0-.066.02-.08.06L5.88 9.52c-.007.047.007.067.047.067h.713c.04 0 .067-.027.08-.067l.307-.973H8.88l.307.973c.013.047.04.067.08.067h.726c.047 0 .06-.027.047-.067l-1.4-4.373c-.013-.04-.04-.06-.08-.06zm3.893 0H10.58c-.047 0-.067.02-.067.06V9.52c0 .047.027.067.067.067h.687c.046 0 .066-.027.066-.067V7.787h.994L13 9.527c.013.04.04.06.087.06h.72c.04 0 .06-.02.04-.06l-.734-1.84c.28-.14.487-.3.614-.487.153-.22.226-.493.226-.813 0-.28-.066-.514-.193-.707-.127-.193-.3-.34-.527-.44a1.915 1.915 0 0 0-.78-.153zm-4.426.786.606 1.914H7.26l.607-1.914h.16zm4.353-.026c.24 0 .42.046.547.14.133.093.193.226.193.406 0 .207-.053.36-.167.474-.113.113-.273.166-.48.166h-1.146V5.847z"
      fill="#1E40AF"
      fillRule="evenodd"
    />
  </svg>
);

// Lesão
export const InjuryIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 12 14" {...props}>
    <g>
      <path
        d="M1.5 8V10.25H7.75V8H8.75L11.75 11L8.75 14H7.75V11.75H0V8H1.5Z"
        fill="#7A84FF"
      />
      <path
        d="M3.75 8H5.25V4.75H8.5V3.25H5.25V0H3.75V3.25H0.5V4.75H3.75V8Z"
        fill="#E35C47"
      />
    </g>
  </svg>
);

// Campo
export const CampIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 4v16h20V4H2zm10 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-8 1h2V9H4V6h7v2.14c-1.72.45-3 2-3 3.86 0 1.86 1.28 3.41 3 3.86V18H4v-3zm16-6h-2v6h2v3h-7v-2.14c1.72-.45 3-2 3-3.86 0-1.86-1.28-3.41-3-3.86V6h7v3z"
      fill="currentColor"
    />
  </svg>
);

// Transmissão
export const BroadcastIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 4H2V18H9V20H15V18H22V4H20ZM20 16H4V6H20V16Z"
      fill="currentColor"
    />
    <path
      d="M8.27342 13.9156V9.01266H6.58172C6.53269 9.01266 6.5 8.9789 6.5 8.92827V8.08439C6.5 8.03376 6.53269 8 6.58172 8H11.003C11.052 8 11.0847 8.03376 11.0847 8.08439V8.92827C11.0847 8.9789 11.052 9.01266 11.003 9.01266H9.31949V13.9156C9.31949 13.9662 9.2868 14 9.23777 14H8.35514C8.30611 14 8.27342 13.9662 8.27342 13.9156Z"
      fill="currentColor"
    />
    <path
      d="M17.495 8.08439L15.7624 13.9156C15.7461 13.9747 15.7134 14 15.6562 14H14.0789C14.0217 14 13.989 13.9747 13.9726 13.9156L12.2564 8.08439C12.2401 8.03376 12.2646 8 12.3136 8H13.2616C13.3188 8 13.3515 8.02532 13.3679 8.08439L14.7817 13.0211H14.9942L16.3999 8.08439C16.4162 8.02532 16.4489 8 16.5061 8H17.4377C17.4868 8 17.5113 8.03376 17.495 8.08439Z"
      fill="currentColor"
    />
  </svg>
);

// FT
export const FtIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
    <g fill="#A4A9B3" fillRule="evenodd">
      <path fill="none" d="M0 0h16v16H0z" />
      <path d="M7.925 2.743c3.219 0 5.816 2.647 5.835 5.905 0 3.257-2.616 5.904-5.835 5.904-3.22 0-5.836-2.647-5.836-5.904 0-3.258 2.617-5.905 5.836-5.905zm3.5 3.657H8v.857h1.186v3.657h1.016V7.257h1.224V6.4zm-3.84 0H4.857v4.495h1.017v-1.81h1.6v-.818h-1.6V7.238h1.713V6.4zm-2.86-4.952.339.952A6.749 6.749 0 0 0 1.58 6.171L.64 5.83a7.868 7.868 0 0 1 4.085-4.381zm6.4 0a7.905 7.905 0 0 1 4.047 4.266l-.941.343A6.787 6.787 0 0 0 10.786 2.4l.339-.952z" />
    </g>
  </svg>
);

// Calendário
export const CalendarIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g
      id="Asset-Exportable/Icon/Material/ic_calendar_date"
      stroke="none"
      strokeWidth="1"
      fill="currentColor"
      fillRule="evenodd"
    >
      <g id="ic_calendar_date">
        <polygon
          id="Bounds"
          fillOpacity="0.4"
          opacity="0"
          points="0 0 24 0 24 24 0 24"
        />
        <path
          d="M22,2 L22,12.11 C21.43,11.52 20.75,11.03 20,10.68 L20,8 L4,8 L4,20 L10.68,20 C11.03,20.75 11.52,21.43 12.11,22 L2,22 L2,2 L22,2 Z M17,12 C18.13,12 19.17,12.37 20,13 C21.21,13.91 22,15.37 22,17 C22,19.76 19.76,22 17,22 C15.37,22 13.91,21.21 13,20 C12.37,19.17 12,18.13 12,17 C12,14.24 14.24,12 17,12 Z M17.5,14 L16.5,14 L16.5,17.51 L18.62,19.63 L19.33,18.93 L17.5,17.1 L17.5,14 Z M20,4 L4,4 L4,6 L20,6 L20,4 Z"
          id="Combined-Shape"
        />
      </g>
    </g>
  </svg>
);

// Árbitro
export const RefereeIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
    <g
      id="Asset-Exportable/Icon/Cell-Indicator/ic_referee"
      stroke="none"
      strokeWidth="1"
      fill="currentColor"
      fillRule="evenodd"
    >
      <g id="ic_whistle">
        <rect id="Bounds" fillOpacity="0" x="0" y="0" width="16" height="16" />
        <path
          d="M2.4,7 C2.66133333,7 2.89466667,7.08 3.1,7.21 C3.576,5.92 4.74266667,5.01 6.11466667,5 L7.53333333,5 L8.46666667,6 L9.4,6 L9.4,5 L15,5 L14.0666667,7 L9.4,9 L9.35333333,9.03 C9.11066667,10.71 7.776,12 6.13333333,12 C4.752,12 3.58533333,11.08 3.1,9.79 C2.89466667,9.92 2.652,10 2.4,10 C1.62533333,10 1,9.33 1,8.5 C1,7.67 1.62533333,7 2.4,7 Z M2.4,9 C2.66133333,9 2.86666667,8.78 2.86666667,8.5 C2.86666667,8.22 2.66133333,8 2.4,8 C2.13866667,8 1.93333333,8.22 1.93333333,8.5 C1.93333333,8.78 2.13866667,9 2.4,9 Z"
          id="Colored-Shape"
        />
      </g>
    </g>
  </svg>
);

export const StadiumIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M5.86001 9H4.67001L2.17001 10.88L2.60001 11.2L5.13001 13.1L6.96001 11.73L5.86001 9Z" />
      <path d="M16.04 11.55L17.06 9H6.94L7.96 11.55H16.04Z" />
      <path d="M19.33 9H18.14L17.04 11.73L18.87 13.1L21.4 11.2L21.83 10.88L19.33 9Z" />
      <path d="M10 4H9V6H10V4Z" />
      <path d="M18 8V2H6V8H18ZM15 3H16V7H15V3ZM8 6V3H11V7H8V6Z" />
      <path d="M18 15H6L2 12V19L6 22H9V18L10 17H14L15 18V22H18L22 19V12L18 15Z" />
    </g>
  </svg>
);

export const BallIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
    <g fillRule="evenodd">
      <path
        d="m7.02 11.46 1.9 1.9-.54 1.63-2.13-.02h-.06l-2.92-1.46 1.36-2.05h2.39zm5.32.92 1.01.6-.12.23a.114.114 0 0 1-.02.024l-.04.036-3.43 1.71c-.02.01-.06.01-.06.01h-.51l.4-1.21v.01l2.77-1.41zM6.53 1l3.31.06 3.32 1.7.05.05 1.73 3.41c.013.013.018.036.02.049v.221l-1.39-.17-.84-2.56.05-.38-3.19-1.62H7.22L8.83 3.5 7.1 5.25l-2.94.5-.78-2.47-.14.07-1.51 3.02v2.89h.8l1.49 1.76-1.36 2.05-1.65-3.31A.143.143 0 0 1 1 9.711V6.19c0-.003.044-.093.117-.24l.101-.205.06-.12.283-.566.078-.156.162-.323.163-.325.236-.47.144-.286.126-.252.122-.242.045-.09.063-.125.05-.03h.01c.01 0 .02-.02.02-.02L6.2 1.01A.143.143 0 0 1 6.249 1h.281zm6.97 6.07 1.47.18v2.47c0 .02-.01.06-.01.06L13.7 12.3l-1.18-.7-.39-2.302L13.5 7.07zM7.08 6.02l1.28 2.44-1.14 2.25H4.74L3.19 8.89l.93-2.37 2.96-.5zm2.43-2.14 2.66.55.72 2.18-1.26 2.05-2.55-.42-1.34-2.57 1.77-1.79z"
        fill="currentColor"
      />
      <path
        d="M7.02 11.46 5.12 13.36 7.25 15l.54-1.63-1.9-1.9h2.39z"
        fill="currentColor"
      />
    </g>
  </svg>
);
