/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { classNameFactory } from "@api/Styles";
import { classes } from "@utils/misc";

import { settings } from "./index";

const cl = classNameFactory("vc-roblox-");

export function RobloxIcon({
    height = 24,
    width = 24,
    className,
    enabled,
}: {
    height?: number;
    width?: number;
    className?: string;
    enabled: boolean;
}) {
    return (
        // <svg
        //     viewBox="0 0 36 36"
        //     height={height}
        //     width={width}
        //     className={classes(cl("icon"), className)}
        // >
        //     <path fill={enabled ? "#FFC0CB" : "#808388"} d="M19.9801 9.0625L20.7301 9.06545V9.0625H19.9801ZM4.01995 9.0625H3.26994L3.26995 9.06545L4.01995 9.0625ZM19.0993 10.6602L18.5268 11.1447L18.6114 11.2447L18.725 11.3101L19.0993 10.6602ZM18.8279 9.39546C18.494 9.15031 18.0246 9.22224 17.7795 9.55611C17.5343 9.88999 17.6063 10.3594 17.9401 10.6045L18.8279 9.39546ZM4.01994 15L3.26994 15V15H4.01994ZM6.05987 10.6045C6.39375 10.3594 6.46568 9.88999 6.22053 9.55612C5.97538 9.22224 5.50598 9.15031 5.1721 9.39546L6.05987 10.6045ZM12 5.65636C11.2279 5.65636 10.7904 5.69743 10.4437 5.74003C10.1041 5.78176 9.93161 5.8125 9.60601 5.8125V7.3125C10.0465 7.3125 10.3308 7.26518 10.6266 7.22883C10.9153 7.19336 11.2918 7.15636 12 7.15636V5.65636ZM12 7.15636C12.7083 7.15636 13.0847 7.19336 13.3734 7.22883C13.6692 7.26518 13.9536 7.3125 14.394 7.3125V5.8125C14.0684 5.8125 13.896 5.78176 13.5563 5.74003C13.2097 5.69743 12.7721 5.65636 12 5.65636V7.15636ZM14.394 7.3125C14.6069 7.3125 14.8057 7.25192 14.9494 7.19867C15.1051 7.14099 15.2662 7.06473 15.4208 6.98509C15.7257 6.82803 16.0797 6.61814 16.4042 6.43125C16.7431 6.23612 17.064 6.0575 17.3512 5.92771C17.6589 5.78868 17.8349 5.75011 17.9053 5.75011V4.25011C17.4968 4.25011 17.0743 4.40685 16.7336 4.56076C16.3725 4.72392 15.9951 4.9359 15.6557 5.13136C15.3019 5.33508 14.9976 5.51578 14.7338 5.65167C14.6041 5.7185 14.5034 5.7643 14.4284 5.79206C14.3415 5.82426 14.3408 5.8125 14.394 5.8125V7.3125ZM17.9053 5.75011C18.2495 5.75011 18.58 5.85266 18.8122 6.0527C19.0237 6.23486 19.2301 6.56231 19.2301 7.18761H20.7301C20.7301 6.18792 20.3778 5.42162 19.7913 4.91628C19.2255 4.42882 18.5186 4.25011 17.9053 4.25011V5.75011ZM19.2301 7.18761V9.0625H20.7301V7.18761H19.2301ZM9.60601 5.8125C9.65925 5.8125 9.65855 5.82426 9.57164 5.79206C9.49668 5.7643 9.39595 5.71849 9.26624 5.65166C9.00249 5.51576 8.69813 5.33504 8.34437 5.13132C8.00493 4.93584 7.62754 4.72384 7.26643 4.56067C6.92577 4.40675 6.5032 4.25 6.09476 4.25V5.75C6.16512 5.75 6.34105 5.78856 6.64878 5.92761C6.93605 6.05741 7.25693 6.23603 7.5958 6.43118C7.92035 6.61808 8.27434 6.82799 8.57919 6.98506C8.73377 7.06471 8.89488 7.14098 9.05059 7.19866C9.19436 7.25191 9.39317 7.3125 9.60601 7.3125V5.8125ZM6.09476 4.25C5.48139 4.25 4.77453 4.42871 4.20872 4.91616C3.62216 5.4215 3.26995 6.18781 3.26995 7.1875H4.76995C4.76995 6.56219 4.97634 6.23475 5.18778 6.05259C5.41998 5.85254 5.75053 5.75 6.09476 5.75V4.25ZM3.26995 7.1875V9.0625H4.76995V7.1875H3.26995ZM12 20.75C13.431 20.75 15.5401 20.4654 17.3209 19.6462C19.1035 18.8262 20.7301 17.3734 20.7301 15H19.2301C19.2301 16.5328 18.2232 17.58 16.694 18.2835C15.1631 18.9877 13.2822 19.25 12 19.25V20.75ZM19.6719 10.1758C19.437 9.89818 19.1575 9.63749 18.8279 9.39546L17.9401 10.6045C18.1808 10.7813 18.3726 10.9625 18.5268 11.1447L19.6719 10.1758ZM19.2301 9.05955C19.2293 9.25778 19.1888 9.67007 19.0916 9.95501C19.0374 10.1139 19.0062 10.1101 19.0627 10.0649C19.1075 10.0289 19.1902 9.98403 19.3002 9.97847C19.4051 9.97317 19.468 10.007 19.4737 10.0103L18.725 11.3101C18.9057 11.4142 19.1272 11.4891 19.3759 11.4766C19.6297 11.4637 19.8412 11.3633 20.0013 11.2349C20.2881 11.0048 20.4331 10.6686 20.5113 10.4392C20.679 9.94758 20.7289 9.35941 20.7301 9.06545L19.2301 9.05955ZM12 19.25C10.7178 19.25 8.83685 18.9877 7.30594 18.2835C5.7768 17.5801 4.76994 16.5328 4.76994 15H3.26994C3.26994 17.3734 4.89649 18.8262 6.67907 19.6462C8.45988 20.4654 10.5689 20.75 12 20.75V19.25ZM4.76994 15C4.76994 14.2119 4.71349 13.5629 4.7889 12.8724C4.85939 12.227 5.04214 11.6541 5.47321 11.1447L4.32811 10.1758C3.64728 10.9804 3.38966 11.8682 3.29777 12.7095C3.2108 13.5058 3.26994 14.3696 3.26994 15L4.76994 15ZM5.47321 11.1447C5.62738 10.9625 5.81916 10.7813 6.05987 10.6045L5.1721 9.39546C4.84248 9.63749 4.56299 9.89818 4.32811 10.1758L5.47321 11.1447ZM3.26995 9.06545C3.27111 9.35941 3.32101 9.94757 3.48871 10.4392C3.56694 10.6686 3.71186 11.0048 3.99873 11.2349C4.15878 11.3633 4.3703 11.4637 4.62412 11.4766C4.87277 11.4891 5.0943 11.4142 5.27501 11.3101L4.52631 10.0103C4.53204 10.007 4.59487 9.97317 4.69976 9.97847C4.80981 9.98403 4.89252 10.0289 4.93734 10.0649C4.99376 10.1101 4.96261 10.1139 4.9084 9.95501C4.81121 9.67007 4.77072 9.25778 4.76994 9.05955L3.26995 9.06545Z" />

        // </svg>
        // <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes(cl("icon"), className)} height={height} width={width}>
        //     <path
        //         d="M19.9801 9.0625L20.7301 9.06545V9.0625H19.9801ZM4.01995 9.0625H3.26994L3.26995 9.06545L4.01995 9.0625ZM19.0993 10.6602L18.5268 11.1447L18.6114 11.2447L18.725 11.3101L19.0993 10.6602ZM18.8279 9.39546C18.494 9.15031 18.0246 9.22224 17.7795 9.55611C17.5343 9.88999 17.6063 10.3594 17.9401 10.6045L18.8279 9.39546ZM4.01994 15L3.26994 15V15H4.01994ZM6.05987 10.6045C6.39375 10.3594 6.46568 9.88999 6.22053 9.55612C5.97538 9.22224 5.50598 9.15031 5.1721 9.39546L6.05987 10.6045ZM12 5.65636C11.2279 5.65636 10.7904 5.69743 10.4437 5.74003C10.1041 5.78176 9.93161 5.8125 9.60601 5.8125V7.3125C10.0465 7.3125 10.3308 7.26518 10.6266 7.22883C10.9153 7.19336 11.2918 7.15636 12 7.15636V5.65636ZM12 7.15636C12.7083 7.15636 13.0847 7.19336 13.3734 7.22883C13.6692 7.26518 13.9536 7.3125 14.394 7.3125V5.8125C14.0684 5.8125 13.896 5.78176 13.5563 5.74003C13.2097 5.69743 12.7721 5.65636 12 5.65636V7.15636ZM14.394 7.3125C14.6069 7.3125 14.8057 7.25192 14.9494 7.19867C15.1051 7.14099 15.2662 7.06473 15.4208 6.98509C15.7257 6.82803 16.0797 6.61814 16.4042 6.43125C16.7431 6.23612 17.064 6.0575 17.3512 5.92771C17.6589 5.78868 17.8349 5.75011 17.9053 5.75011V4.25011C17.4968 4.25011 17.0743 4.40685 16.7336 4.56076C16.3725 4.72392 15.9951 4.9359 15.6557 5.13136C15.3019 5.33508 14.9976 5.51578 14.7338 5.65167C14.6041 5.7185 14.5034 5.7643 14.4284 5.79206C14.3415 5.82426 14.3408 5.8125 14.394 5.8125V7.3125ZM17.9053 5.75011C18.2495 5.75011 18.58 5.85266 18.8122 6.0527C19.0237 6.23486 19.2301 6.56231 19.2301 7.18761H20.7301C20.7301 6.18792 20.3778 5.42162 19.7913 4.91628C19.2255 4.42882 18.5186 4.25011 17.9053 4.25011V5.75011ZM19.2301 7.18761V9.0625H20.7301V7.18761H19.2301ZM9.60601 5.8125C9.65925 5.8125 9.65855 5.82426 9.57164 5.79206C9.49668 5.7643 9.39595 5.71849 9.26624 5.65166C9.00249 5.51576 8.69813 5.33504 8.34437 5.13132C8.00493 4.93584 7.62754 4.72384 7.26643 4.56067C6.92577 4.40675 6.5032 4.25 6.09476 4.25V5.75C6.16512 5.75 6.34105 5.78856 6.64878 5.92761C6.93605 6.05741 7.25693 6.23603 7.5958 6.43118C7.92035 6.61808 8.27434 6.82799 8.57919 6.98506C8.73377 7.06471 8.89488 7.14098 9.05059 7.19866C9.19436 7.25191 9.39317 7.3125 9.60601 7.3125V5.8125ZM6.09476 4.25C5.48139 4.25 4.77453 4.42871 4.20872 4.91616C3.62216 5.4215 3.26995 6.18781 3.26995 7.1875H4.76995C4.76995 6.56219 4.97634 6.23475 5.18778 6.05259C5.41998 5.85254 5.75053 5.75 6.09476 5.75V4.25ZM3.26995 7.1875V9.0625H4.76995V7.1875H3.26995ZM12 20.75C13.431 20.75 15.5401 20.4654 17.3209 19.6462C19.1035 18.8262 20.7301 17.3734 20.7301 15H19.2301C19.2301 16.5328 18.2232 17.58 16.694 18.2835C15.1631 18.9877 13.2822 19.25 12 19.25V20.75ZM19.6719 10.1758C19.437 9.89818 19.1575 9.63749 18.8279 9.39546L17.9401 10.6045C18.1808 10.7813 18.3726 10.9625 18.5268 11.1447L19.6719 10.1758ZM19.2301 9.05955C19.2293 9.25778 19.1888 9.67007 19.0916 9.95501C19.0374 10.1139 19.0062 10.1101 19.0627 10.0649C19.1075 10.0289 19.1902 9.98403 19.3002 9.97847C19.4051 9.97317 19.468 10.007 19.4737 10.0103L18.725 11.3101C18.9057 11.4142 19.1272 11.4891 19.3759 11.4766C19.6297 11.4637 19.8412 11.3633 20.0013 11.2349C20.2881 11.0048 20.4331 10.6686 20.5113 10.4392C20.679 9.94758 20.7289 9.35941 20.7301 9.06545L19.2301 9.05955ZM12 19.25C10.7178 19.25 8.83685 18.9877 7.30594 18.2835C5.7768 17.5801 4.76994 16.5328 4.76994 15H3.26994C3.26994 17.3734 4.89649 18.8262 6.67907 19.6462C8.45988 20.4654 10.5689 20.75 12 20.75V19.25ZM4.76994 15C4.76994 14.2119 4.71349 13.5629 4.7889 12.8724C4.85939 12.227 5.04214 11.6541 5.47321 11.1447L4.32811 10.1758C3.64728 10.9804 3.38966 11.8682 3.29777 12.7095C3.2108 13.5058 3.26994 14.3696 3.26994 15L4.76994 15ZM5.47321 11.1447C5.62738 10.9625 5.81916 10.7813 6.05987 10.6045L5.1721 9.39546C4.84248 9.63749 4.56299 9.89818 4.32811 10.1758L5.47321 11.1447ZM3.26995 9.06545C3.27111 9.35941 3.32101 9.94757 3.48871 10.4392C3.56694 10.6686 3.71186 11.0048 3.99873 11.2349C4.15878 11.3633 4.3703 11.4637 4.62412 11.4766C4.87277 11.4891 5.0943 11.4142 5.27501 11.3101L4.52631 10.0103C4.53204 10.007 4.59487 9.97317 4.69976 9.97847C4.80981 9.98403 4.89252 10.0289 4.93734 10.0649C4.99376 10.1101 4.96261 10.1139 4.9084 9.95501C4.81121 9.67007 4.77072 9.25778 4.76994 9.05955L3.26995 9.06545Z"
        //         fill={enabled ? "#FFC0CB" : "#808388"} />
        //     <path
        //         d="M12.826 16C12.826 16.1726 12.465 16.3125 12.0196 16.3125C11.5742 16.3125 11.2131 16.1726 11.2131 16C11.2131 15.8274 11.5742 15.6875 12.0196 15.6875C12.465 15.6875 12.826 15.8274 12.826 16Z"
        //         stroke={enabled ? "#FFC0CB" : "#808388"} stroke-width="1.5" />
        //     <path
        //         d="M15.5 13.5938C15.5 14.0252 15.2834 14.375 15.0161 14.375C14.7489 14.375 14.5323 14.0252 14.5323 13.5938C14.5323 13.1623 14.7489 12.8125 15.0161 12.8125C15.2834 12.8125 15.5 13.1623 15.5 13.5938Z"
        //         stroke={enabled ? "#FFC0CB" : "#808388"} stroke-width="1.5" />
        //     <path
        //         d="M9.5 13.5938C9.5 14.0252 9.28336 14.375 9.01613 14.375C8.74889 14.375 8.53226 14.0252 8.53226 13.5938C8.53226 13.1623 8.74889 12.8125 9.01613 12.8125C9.28336 12.8125 9.5 13.1623 9.5 13.5938Z"
        //         stroke={enabled ? "#FFC0CB" : "#808388"} stroke-width="1.5" />
        //     <path d="M22.0004 15.4688C21.5165 15.1562 19.4197 14.375 18.6133 14.375" stroke={enabled ? "#FFC0CB" : "#808388"} stroke-width="1.5"
        //         stroke-linecap="round" />
        //     <path d="M20.3871 17.9688C19.9033 17.6562 18.7742 16.875 17.9678 16.875" stroke={enabled ? "#FFC0CB" : "#808388"} stroke-width="1.5"
        //         stroke-linecap="round" />
        //     <path d="M2 15.4688C2.48387 15.1562 4.58065 14.375 5.3871 14.375" stroke={enabled ? "#FFC0CB" : "#808388"} stroke-width="1.5"
        //         stroke-linecap="round" />
        //     <path d="M3.61279 17.9688C4.09667 17.6562 5.2257 16.875 6.03215 16.875" stroke={enabled ? "#FFC0CB" : "#808388"} stroke-width="1.5"
        //         stroke-linecap="round" />
        // </svg>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Roblox_icon_-_2017.svg/512px-Roblox_icon_-_2017.svg.png?20230528063848" alt=""
            height={height}
            width={width} className={classes(cl("icon"), className)} style={enabled ? { filter: "grayscale(1)" } : undefined} />
    );
}

export const RobloxIconFactory: ChatBarButtonFactory = ({ }) => {
    const { filter: filter } = settings.use(["filter"]);

    const toggle = () => {
        const newState = !filter;
        settings.store.filter = newState;
    };

    return (
        <ChatBarButton
            tooltip={filter ? "Disable Roblox Filter" : "Enable Roblox Filter"}
            onClick={() => {
                toggle();
            }}
            onContextMenu={() => toggle()}
            buttonProps={{}}
        >
            <RobloxIcon
                className={cl({ "auto-filter": filter, "chat-button": true })}
                enabled={filter}
            />
        </ChatBarButton>
    );
};
