import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#850E88" />
        <path
          d="M16 6L17.5 13.5L25 16L17.5 18.5L16 26L14.5 18.5L7 16L14.5 13.5L16 6Z"
          fill="white"
        />
      </svg>
    ),
    { ...size }
  );
}
