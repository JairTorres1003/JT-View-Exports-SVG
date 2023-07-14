import React from "react";

export const sumar = (a, b) => {
  return a + b;
};

export const sendData = () => {
  console.log("sendData: No retorna nada");
};

export const variableNumero = 10;

export const IconArrowBreadcrumb = (
  <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4L0 8L4.03789e-07 0L8 4Z" fill="#9D9D9D" />
  </svg>
);

export const FcBinoculars = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <g fill="#37474F">
        <circle cx="33" cy="16" r="6"></circle>
        <circle cx="15" cy="16" r="6"></circle>
        <path d="M46.7,25l-15.3,3H16.7L1.4,25l4.3-7.9c1.1-1.9,3.1-3.1,5.3-3.1h26.2c2.2,0,4.2,1.2,5.3,3.1L46.7,25z"></path>
        <circle cx="38" cy="30" r="10"></circle>
        <circle cx="10" cy="30" r="10"></circle>
        <circle cx="24" cy="28" r="5"></circle>
      </g>
      <circle fill="#546E7A" cx="24" cy="28" r="2"></circle>
      <g fill="#a0f">
        <circle cx="38" cy="30" r="7"></circle>
        <circle cx="10" cy="30" r="7"></circle>
      </g>
      <g fill="#CE93D8">
        <path d="M41.7,27.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C42.1,28.7,42.1,28.1,41.7,27.7z"></path>
        <path d="M10,26c-1.4,0-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1c1.2-1.3,3.3-1.3,4.5,0 c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0.1-1.4C12.8,26.6,11.4,26,10,26z"></path>
      </g>
    </svg>
  );
};

export function FcBiohazard() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#00A344"
        d="M24,13c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S31.2,13,24,13z M24,35c-5,0-9-4-9-9s4-9,9-9s9,4,9,9 S29,35,24,35z"></path>
      <path
        fill="#00C853"
        d="M8.5,25.4c4-2.2,9-1.1,11.5,2.5c0.1,0.1,0.2,0.1,0.3,0.1l1.2-0.7c0.1-0.1,0.2-0.2,0.1-0.3 c0-0.2-0.1-0.4-0.1-0.6c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2l0,0 c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1 c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1 c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2-0.1,0.2-0.3v-1.3c0-0.1-0.1-0.2-0.2-0.2 c-4.5-0.4-8-4.1-8-8.6c0-4.1,3-7.6,6.9-8.4c0.1,0,0.2-0.1,0.2-0.3V4.8c0-0.1-0.1-0.2-0.2-0.2C16.4,5.5,12,10.4,12,16.3 c0,1.3,0.2,2.6,0.6,3.8c-1.2,0.2-2.5,0.7-3.6,1.3c-5.2,3-7.3,9.2-5.2,14.5C3.9,36,4,36,4.1,36l0.3-0.2c0.1-0.1,0.2-0.2,0.1-0.3 C3.3,31.7,4.8,27.4,8.5,25.4L8.5,25.4z M39,21.4c-1.2-0.7-2.4-1.1-3.6-1.3c0.4-1.2,0.6-2.4,0.6-3.8c0-5.9-4.4-10.8-10.2-11.7 c-0.1,0-0.2,0.1-0.2,0.2v0.4c0,0.1,0.1,0.2,0.2,0.3c4,0.8,6.9,4.3,6.9,8.4c0,4.5-3.5,8.2-8,8.6c-0.1,0-0.2,0.1-0.2,0.2v1.3 c0,0.1,0.1,0.2,0.2,0.3c0.2,0.1,0.4,0.1,0.6,0.2c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0 c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1 c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1 c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.2,0.1,0.3l1.2,0.7c0.1,0.1,0.2,0,0.3-0.1c2.6-3.6,7.6-4.8,11.5-2.5 c3.6,2.1,5.2,6.3,3.9,10.1c0,0.1,0,0.2,0.1,0.3l0.3,0.2c0.1,0.1,0.2,0,0.3-0.1C46.3,30.5,44.2,24.3,39,21.4L39,21.4z M30.8,40.3 c-4-2.2-5.5-7.1-3.5-11.1c0.1-0.1,0-0.2-0.1-0.3L26,28.2c-0.1-0.1-0.2,0-0.3,0c-0.2,0.1-0.3,0.3-0.5,0.3c0,0,0,0,0,0 c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.4,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0 c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0 c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1,0c-0.2-0.1-0.3-0.2-0.5-0.3 c-0.1-0.1-0.2-0.1-0.3,0l-1.2,0.7c-0.1,0.1-0.1,0.2-0.1,0.3c1.9,4,0.4,8.8-3.5,11.1c-3.6,2.1-8.2,1.3-10.9-1.7 c-0.1-0.1-0.2-0.1-0.3-0.1l-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c3.6,4.5,10.2,5.8,15.4,2.8c1.2-0.7,2.2-1.5,3-2.4 c0.8,0.9,1.8,1.8,3,2.4c5.2,3,11.7,1.6,15.4-2.8c0.1-0.1,0-0.2-0.1-0.3L42,38.5c-0.1-0.1-0.2,0-0.3,0.1C39,41.5,34.4,42.3,30.8,40.3 L30.8,40.3z"></path>
    </svg>
  );
}

export const Header = () => {
  return <header>soy header</header>;
};