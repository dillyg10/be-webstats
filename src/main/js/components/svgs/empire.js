import React from "react";

export const EmpireSmallHeader = ({
                                                                   primaryColor,
                                                                   secondaryColor,
                                                               }) => (
    <svg
        width="271"
        height="47"
        viewBox="0 0 271 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M2 10.9456H268.6V41.0456H2V10.9456Z" fill={primaryColor} />
        <g filter="url(#filter0_d)">
            <path
                d="M9.42728 43L261.955 42.4669L268.6 41.0454H2L9.42728 43Z"
                fill={secondaryColor}
            />
        </g>
        <path d="M9.3479 0H49.76V11.0215H9.3479V0Z" fill={primaryColor} />
        <path d="M114.419 0H155.566V11.0215H114.419V0Z" fill={primaryColor} />
        <path d="M220.96 0H262.107V11.0215H220.96V0Z" fill={primaryColor} />
        <path
            d="M49.7595 0L51.9638 3.93624V7.47885V11.0215H49.7595V0Z"
            fill={secondaryColor}
        />
        <path
            d="M220.96 0L218.755 3.93624V11.0215H220.96V0Z"
            fill={secondaryColor}
        />
        <defs>
            <filter
                id="filter0_d"
                x="0.0454535"
                y="40.6545"
                width="270.509"
                height="5.86364"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1.56364" />
                <feGaussianBlur stdDeviation="0.977273" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);

export const EmpireMediumHeader = ({
                                                                    primaryColor,
                                                                    secondaryColor,
                                                                }) => (
    <svg
        width="369"
        height="64"
        viewBox="0 0 369 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M3 14.8967H365.837V55.8622H3V14.8967Z" fill={primaryColor} />
        <g filter="url(#filter1_d)">
            <path
                d="M13.1084 58.5222L356.793 57.7967L365.837 55.8621H3L13.1084 58.5222Z"
                fill={secondaryColor}
            />
        </g>
        <path d="M13 0H68V15H13V0Z" fill={primaryColor} />
        <path d="M156 0H212V15H156V0Z" fill={primaryColor} />
        <path d="M301 0H357V15H301V0Z" fill={primaryColor} />
        <path d="M68 0L71 5.35714V10.1786V15H68V0Z" fill={secondaryColor} />
        <path d="M301 0L298 5.35714V15H301V0Z" fill={secondaryColor} />
        <defs>
            <filter
                id="filter1_d"
                x="0.339901"
                y="55.33"
                width="368.158"
                height="7.9803"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2.12808" />
                <feGaussianBlur stdDeviation="1.33005" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
