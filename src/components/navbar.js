import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/images/Logo-INH.png";
import logoLight from "../assets/images/Logo-INH.png";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  /*********************/
  /*    Menu Active    */
  /*********************/
  function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }

  function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(matchingMenuItem, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  }
  /*********************/
  /*  Clickable manu   */
  /*********************/
  if (document.getElementById("navigation")) {
    var elements = document.getElementById("navigation").getElementsByTagName("a");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].onclick = function (elem) {
        if (elem.target.getAttribute("href") === "#") {
          var submenu = elem.target.nextElementSibling.nextElementSibling;
          submenu.classList.toggle("open");
        }
      };
    }
  }

  return (
    <>
      <nav id="topnav" className={`${scroll ? "nav-sticky" : ""} defaultscroll is-sticky`}>
        <div className="container">
          <Link className="logo" to="/">
            <img src={logoDark} className="h-10 inline-block dark:hidden" alt="" />
            <img src={logoLight} className="h-10 hidden dark:inline-block" alt="" />
          </Link>

          <div className="menu-extras">
            <div className="menu-item">
              <Link className={`${toggleMenu ? "open" : ""} navbar-toggle`} onClick={() => setToggleMenu(!toggleMenu)}>
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          <ul className="buy-button list-none mb-0">
            <li className="md:inline hidden ps-1 mb-0 ">
              <Link
                to="/"
                target="_blank"
                className="py-[6px] px-4 inline-block items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white font-semibold">
                Donasi Sekarang
              </Link>
            </li>
          </ul>
          <div id="navigation" className={`${toggleMenu ? "block" : ""}`}>
            <ul className="navigation-menu">
              <li>
                <Link to="/" className="sub-menu-item">
                  Beranda
                </Link>
              </li>

              <li className="has-submenu parent-menu-item">
                <Link to="#">Tentang Kami</Link>
                <span className="menu-arrow"></span>
                <ul className="submenu open">
                  <li>
                    <Link to="/aboutus" className="sub-menu-item">
                      Latar Belakang
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/helpcenter" className="sub-menu-item">
                      Struktur Organisasi
                    </Link>
                  </li> */}

                  <li>
                    <Link to="/visimisi" className="sub-menu-item">
                      Visi & Misi
                    </Link>
                  </li>

                  <li>
                    <Link to="/fokus" className="sub-menu-item">
                      Fokus Utama
                    </Link>
                  </li>

                  <li>
                    <Link to="/legalitas" className="sub-menu-item">
                      Legalitas
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/helpcenter" className="sub-menu-item">
                      Pencapaiaan
                    </Link>
                  </li> */}

                  {/* <li>
                    <Link to="/helpcenter" className="sub-menu-item">
                      Mitra Partner
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <Link to="/daftarprogram" className="sub-menu-item">
                  Daftar Program
                </Link>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link to="/newsinh">Publikasi</Link>
                <span className="menu-arrow"></span>
                <ul className="submenu open">
                  <li>
                    <Link to="/newsinh" className="sub-menu-item">
                      News INH
                    </Link>
                  </li>

                  <li>
                    <Link to="/distribusi" className="sub-menu-item">
                      Distribusi Program
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/contact" className="sub-menu-item">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
