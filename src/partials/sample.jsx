<SidebarLinkGroup activecondition={pathname === "/" || pathname.includes("dashboard")}>
  {(handleClick, open) => {
    return (
      <React.Fragment>
        <a
          href="#0"
          className={`block text-slate-200 truncate transition duration-150 ${
            pathname === "/" || pathname.includes("dashboard") ? "hover:text-slate-200" : "hover:text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path
                  className={`fill-current ${pathname === "/" || pathname.includes("dashboard") ? "text-indigo-500" : "text-slate-400"}`}
                  d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                />
                <path
                  className={`fill-current ${pathname === "/" || pathname.includes("dashboard") ? "text-indigo-600" : "text-slate-600"}`}
                  d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                />
                <path
                  className={`fill-current ${pathname === "/" || pathname.includes("dashboard") ? "text-indigo-200" : "text-slate-400"}`}
                  d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                />
              </svg>
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
            </div>
            {/* Icon */}
            <div className="flex shrink-0 ml-2">
              <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "rotate-180"}`} viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </div>
        </a>
        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Main</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/dashboard/analytics"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Analytics</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/dashboard/fintech"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Fintech</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }}
</SidebarLinkGroup>;
{
  /* E-Commerce */
}
<SidebarLinkGroup activecondition={pathname.includes("ecommerce")}>
  {(handleClick, open) => {
    return (
      <React.Fragment>
        <a
          href="#0"
          className={`block text-slate-200 truncate transition duration-150 ${
            pathname.includes("ecommerce") ? "hover:text-slate-200" : "hover:text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path
                  className={`fill-current ${pathname.includes("ecommerce") ? "text-indigo-300" : "text-slate-400"}`}
                  d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                />
                <path
                  className={`fill-current ${pathname.includes("ecommerce") ? "text-indigo-600" : "text-slate-700"}`}
                  d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                />
                <path
                  className={`fill-current ${pathname.includes("ecommerce") ? "text-indigo-500" : "text-slate-600"}`}
                  d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                />
              </svg>
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">E-Commerce</span>
            </div>
            {/* Icon */}
            <div className="flex shrink-0 ml-2">
              <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "rotate-180"}`} viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </div>
        </a>
        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/customers"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Customers</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/orders"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Orders</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/invoices"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Invoices</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/shop"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Shop</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/shop-2"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Shop 2</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/product"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Single Product</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/cart"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/cart-2"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart 2</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/cart-3"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart 3</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/ecommerce/pay"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pay</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }}
</SidebarLinkGroup>;
{
  /* Community */
}
<SidebarLinkGroup activecondition={pathname.includes("community")}>
  {(handleClick, open) => {
    return (
      <React.Fragment>
        <a
          href="#0"
          className={`block text-slate-200 truncate transition duration-150 ${
            pathname.includes("community") ? "hover:text-slate-200" : "hover:text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path
                  className={`fill-current ${pathname.includes("community") ? "text-indigo-500" : "text-slate-600"}`}
                  d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                />
                <path
                  className={`fill-current ${pathname.includes("community") ? "text-indigo-300" : "text-slate-400"}`}
                  d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                />
              </svg>
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Community</span>
            </div>
            {/* Icon */}
            <div className="flex shrink-0 ml-2">
              <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "rotate-180"}`} viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </div>
        </a>
        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/community/users-tabs"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Users - Tabs</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/community/users-tiles"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Users - Tiles</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/community/profile"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Profile</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/community/feed"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Feed</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/community/forum"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Forum</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/community/forum-post"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Forum - Post</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/community/meetups"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Meetups</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/community/meetups-post"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Meetups - Post</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }}
</SidebarLinkGroup>;
{
  /* Finance */
}
<SidebarLinkGroup activecondition={pathname.includes("finance")}>
  {(handleClick, open) => {
    return (
      <React.Fragment>
        <a
          href="#0"
          className={`block text-slate-200 truncate transition duration-150 ${
            pathname.includes("finance") ? "hover:text-slate-200" : "hover:text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path
                  className={`fill-current ${pathname.includes("finance") ? "text-indigo-300" : "text-slate-400"}`}
                  d="M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z"
                />
                <path
                  className={`fill-current ${pathname.includes("finance") ? "text-indigo-500" : "text-slate-700"}`}
                  d="M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z"
                />
                <path
                  className={`fill-current ${pathname.includes("finance") ? "text-indigo-600" : "text-slate-600"}`}
                  d="M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z"
                />
              </svg>
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Finance</span>
            </div>
            {/* Icon */}
            <div className="flex shrink-0 ml-2">
              <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "rotate-180"}`} viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </div>
        </a>
        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/finance/cards"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cards</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/finance/transactions"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Transactions</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/finance/transaction-details"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Transaction Details
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }}
</SidebarLinkGroup>;
{
  /* Job Board */
}
<SidebarLinkGroup activecondition={pathname.includes("job")}>
  {(handleClick, open) => {
    return (
      <React.Fragment>
        <a
          href="#0"
          className={`block text-slate-200 truncate transition duration-150 ${
            pathname.includes("job") ? "hover:text-slate-200" : "hover:text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path
                  className={`fill-current ${pathname.includes("job") ? "text-indigo-600" : "text-slate-700"}`}
                  d="M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z"
                />
                <path
                  className={`fill-current ${pathname.includes("job") ? "text-indigo-500" : "text-slate-600"}`}
                  d="M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z"
                />
                <path
                  className={`fill-current ${pathname.includes("job") ? "text-indigo-300" : "text-slate-400"}`}
                  d="M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z"
                />
              </svg>
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Job Board</span>
            </div>
            {/* Icon */}
            <div className="flex shrink-0 ml-2">
              <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "rotate-180"}`} viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </div>
        </a>
        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/job/job-listing"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listing</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/job/job-post"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Job Post</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/job/company-profile"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Company Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }}
</SidebarLinkGroup>;
{
  /* Tasks */
}
<SidebarLinkGroup activecondition={pathname.includes("tasks")}>
  {(handleClick, open) => {
    return (
      <React.Fragment>
        <a
          href="#0"
          className={`block text-slate-200 truncate transition duration-150 ${
            pathname.includes("tasks") ? "hover:text-slate-200" : "hover:text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path
                  className={`fill-current ${pathname.includes("tasks") ? "text-indigo-500" : "text-slate-600"}`}
                  d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                />
                <path className={`fill-current ${pathname.includes("tasks") ? "text-indigo-500" : "text-slate-600"}`} d="M1 1h22v23H1z" />
                <path
                  className={`fill-current ${pathname.includes("tasks") ? "text-indigo-300" : "text-slate-400"}`}
                  d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                />
              </svg>
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tasks</span>
            </div>
            {/* Icon */}
            <div className="flex shrink-0 ml-2">
              <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "rotate-180"}`} viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </div>
        </a>
        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/tasks/kanban"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Kanban</span>
              </NavLink>
            </li>
            <li className="mb-1 last:mb-0">
              <NavLink
                end
                to="/tasks/list"
                className={({ isActive }) =>
                  "block transition duration-150 truncate " + (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
                }
              >
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">List</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }}
</SidebarLinkGroup>;
