import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  { name: "My Orders", href: "/marketplace/courses/owned", current: false },
  { name: "Manage Orders", href: "/marketplace/courses/manage", current: true },
];

const Breadcrumbs = () => {
  const { pathname } = useRouter();
  return (
    <nav
      className="container px-6 py-4 mx-auto flex my-4"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="bg-indigo-300 rounded-md shadow px-6 flex space-x-4"
      >
        <li className="flex group cursor-pointer">
          <div className="flex items-center">
            <Link
              href="/marketplace"
              className="text-gray-400 hover:text-gray-500"
              passHref
            >
              <div>
                <ShoppingBagIcon
                  className={`"flex-shrink-0 h-5 w-5 text-white group-hover:text-gray-500 transform transition-all duration-200" ${
                    pathname === "/marketplace" && " text-blue-900"
                  }`}
                  aria-hidden="true"
                />
                <span className="sr-only">Buy</span>
              </div>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex group cursor-pointer">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-white"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                href={page.href}
                aria-current={page.current ? "page" : undefined}
                passHref
              >
                <span
                  className={`"text-sm font-medium text-white group-hover:text-gray-500 transform transition-all duration-200" ${
                    pathname === page.href ? "text-blue-900 ml-4" : "ml-4"
                  }`}
                >
                  {page.name}
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
