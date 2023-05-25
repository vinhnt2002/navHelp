import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Product", subMenu: true },
  { id: 3, name: "Colllection", url: "/Collection" },
  { id: 4, name: "Blog", url: "/Blog" },
];

const subMenuData = [
  { id: 1, name: "Gau Bong", doc_count: 11 },
  { id: 2, name: "Coc Nuoc", doc_count: 8 },
  { id: 3, name: "Do Luu Niem", doc_count: 64 },
  { id: 4, name: "Vay", doc_count: 107 },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center justify-center gap-8 font-medium text-black h-full  ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative group h-full"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BiChevronDown
                  className="absolute top-[50%] transform translate-y-[-50%] -right-3.5"
                  size={14}
                />
                {item.subMenu && 
                <ul
                  className="bg-white absolute top-[100%] left-0
                  min-w-[250px] px-1 py-1 text-black shadow-lg hidden group-hover:block
                  "
                >
                  {/* SHOW SUBMENU CATE */}
                  {subMenuData.map((submenu) => {
                    return (
                      <Link
                        key={submenu.id}
                        href="/"
                        onClick={() => setShowCatMenu(false)}
                      >
                        <li
                          className="h-12 flex justify-between
                           items-center px-3 hover:bg-black/[0.03] rounded-md"
                        >
                          {submenu.name}
                          <span className="opacity-50 text-sm">78</span>
                        </li>
                      </Link>
                    );
                  })}
                  {/* END SUBMENU  */}
                </ul>}
                
              </li>
            ) : (
              <li className="cursor-pointer h-full flex items-center mr-1">
                <Link className="" href={item?.url}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
