import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../../images/profile.png";

// SideBar With FlowBite
function Navbar() {
    const NavLinks = [
        {
            id: 1,
            path: "/",
            label: "Home",
            svgPath: (
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
            ),
        },
        {
            id: 2,
            path: "/about",
            label: "About",
            svgPath: (
                <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
            ),
        },
        {
            id: 3,
            path: "/projects",
            label: "Projects",
            svgPath: (
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
                />
            ),
        },
        {
            id: 4,
            path: "/articles",
            label: "Articles",
            svgPath: (
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                />
            ),
        },
        {
            id: 5,
            path: "/contact",
            label: "Contact",
            svgPath: (
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
            ),
        },
    ];

    const SocialMedia = [
        {
            id: 1,
            link: "https://x.com/baseleusnara",
            label: "Twitter",
            svgPath: (
                <path
                    fill="currentColor"
                    d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
                />
            ),
        },
        {
            id: 2,
            link: "https://www.linkedin.com/in/dian-wicaksono/",
            label: "LinkedIn",
            svgPath: (
                <>
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                    />
                    <path
                        fill="currentColor"
                        d="M7.2 8.809H4V19.5h3.2V8.809Z"
                    />
                </>
            ),
        },
        {
            id: 3,
            link: "https://github.com/DianKartiko",
            label: "Github",
            svgPath: (
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                />
            ),
        },
        {
            id: 4,
            link: "https://instagram.com/helios.ui",
            label: "Instagram",
            svgPath: (
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
            ),
        },
    ];

    const ImageProfile = {
        name: "Dian Wicaksono",
        role: "Creative People",
        path: ProfileImage,
        alt: "Profile Image",
    };

    return (
        <>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-evenly rounded-2xl">
                    {/* Link Navigation */}
                    <ul className="space-x-4 flex items-center">
                        <img
                            class="w-12 h-12 rounded-full"
                            src={ImageProfile.path}
                            alt={ImageProfile.alt}
                        ></img>
                        <div className="flex flex-col ">
                            <span className="text-lg font-semibold text-black">
                                {ImageProfile.name}
                            </span>
                            <span className="text-sm font-regular text-gray-500">
                                {ImageProfile.role}
                            </span>
                        </div>
                    </ul>
                    <ul className="space-y-2 font-medium">
                        {NavLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.path}
                                    className="flex items-center p-2 text-gray-500 rounded-lg font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-gray-900 transition-all"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox={link.viewbox}
                                    >
                                        {link.svgPath}
                                    </svg>
                                    <span className="ms-3">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Link Social Media*/}
                    <ul className="space-y-2 font-medium">
                        {SocialMedia.map((SocialLink) => (
                            <li key={SocialLink.id}>
                                <a
                                    href={SocialLink.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-2 text-gray-500 rounded-lg font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-gray-900 transition-all"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        {SocialLink.svgPath}
                                    </svg>
                                    <span className="ms-3">
                                        {SocialLink.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Navbar;
