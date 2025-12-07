import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
    { title: "Home", to: "/" },
    {
        title: "About Us",
        to: "/about",
        children: [
            { title: "Membership", to: "/membership" },
            { title: "List of Corporate Members", to: "/corporate-members" },
            { title: "List of Life Members", to: "/life-members" },
            { title: "President Message", to: "/president-message" },
            { title: "E-Magzine", to: "/e-magzine" },
            { title: "APTSMS Presidents", to: "/aptsms-presidents" },
            { title: "Executive Council", to: "/executive-council" },
            { title: "Endowment Lectures", to: "/endowment-lectures" },
            { title: "By-laws", to: "/by-laws" },
        ],
    },
    {
        title: "Publications",
        to: "/publications",
    },
    {
        title: "Events",
        to: "/events",
        children: [
            { title: "Annual Congress", to: "/annual-congress" },
            { title: "International Conferences", to: "/international-conferences" },
        ],
    },
    // {
    //     title: "APTSMS Team",
    //     children: [
            
    //     ],
    // },
    { title: "Gallery", to: "/gallery" },
    { title: "Contact Us", to: "/contact" },
    { title: "Login", to: "/login" },
];

export function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className="w-full px-2 md:px-4">
            {/* Mobile Hamburger */}
            <div className="flex justify-end items-center py-2 bg-white dark:bg-gray-900 xl:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className="text-gray-700 dark:text-white mr-4"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden xl:flex w-full justify-end">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList className="flex flex-row items-center gap-3 bg-transparent">
                        {components.map((item) =>
                            item.children ? (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger
                                        className="text-sm px-3 py-2 rounded hover:bg-green-300 dark:hover:bg-green-800 transition-colors"
                                    >
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="min-w-[200px] bg-white dark:bg-gray-900 shadow-lg rounded-md p-2 mt-1 z-50">
                                        <ul className="grid gap-1">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        to={item.to}
                                                        className="font-semibold text-sm block py-1 px-2 rounded hover:bg-green-400 dark:hover:bg-green-700"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </NavigationMenuLink>

                                                {item.children.map((child) => (
                                                    <NavigationMenuLink asChild key={child.title}>
                                                        <Link
                                                            to={child.to}
                                                            className="text-sm block px-2 py-1 rounded hover:bg-green-400 dark:hover:bg-green-700 ml-4"
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ) : (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink
                                        asChild
                                        className={
                                            navigationMenuTriggerStyle() +
                                            " text-sm px-3 py-2 rounded !hover:bg-green-400 !dark:hover:bg-green-700 transition-colors"
                                        }
                                    >
                                        <Link to={item.to}>{item.title}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 bg-opacity-95 flex flex-col items-center pt-8 xl:hidden">
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-4 right-4 text-gray-700 dark:text-white"
                    >
                        <X className="w-7 h-7" />
                    </button>

                    <NavigationMenu viewport={false} className="w-full">
                        <NavigationMenuList className="flex flex-col gap-2 w-full items-center">
                            {components.map((item) =>
                                item.children ? (
                                    <NavigationMenuItem key={item.title} className="w-full">
                                        <NavigationMenuTrigger
                                            className="text-base px-4 py-3 rounded !hover:bg-green-400 !dark:hover:bg-green-700 w-full text-left"
                                        >
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-white dark:bg-gray-900 shadow-lg rounded-md mt-1 w-11/12 mx-auto p-2">
                                            <ul className="grid gap-1">
                                                <li>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            to={item.to}
                                                            onClick={() => setOpen(false)}
                                                            className="font-semibold text-base block py-1 px-2 rounded hover:bg-green-400 dark:hover:bg-green-700"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </NavigationMenuLink>

                                                    {item.children.map((child) => (
                                                        <NavigationMenuLink asChild key={child.title}>
                                                            <Link
                                                                to={child.to}
                                                                onClick={() => setOpen(false)}
                                                                className="text-base block px-2 py-1 ml-4 rounded hover:bg-green-400 dark:hover:bg-green-700"
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ) : (
                                    <NavigationMenuItem key={item.title} className="w-full">
                                        <NavigationMenuLink
                                            asChild
                                            className={
                                                navigationMenuTriggerStyle() +
                                                " text-base px-4 py-3 rounded w-full !hover:bg-green-400 !dark:hover:bg-green-700"
                                            }
                                        >
                                            <Link to={item.to} onClick={() => setOpen(false)}>
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                )
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            )}
        </nav>
    );
}