export const Menu = () => {
  return (
    <div className="display-grid js no-touch cssanimations csstransitions">
      <div className="nav-grid-logo">
        <header className="pad-top-500 pad-bottom-500 wrapper split-pair text-500 weight-light">
          <div>
            <a href="https://www.aafederation.org" target="_blank">
              <img
                src="/img/logo/AAF-Logo.svg"
                alt="logo"
                className="header-logo"
              />
            </a>
          </div>
          <nav
            aria-label="main menu"
            className="font-serif right-align nav-full-width"
          >
            <ul className="nav" role="list">
              <li className="display-none-important" id="go-back">
                <span className="link-pointer">❮ Back to search results</span>
              </li>
              <li id="go-home">
                {/* <a href="/" className="link-pointer" {{ if .IsHome }}data-variant="invert"{{ end }}>Directory Home</a> */}
                <a href="/" className="link-pointer" data-variant="invert">
                  Mental Health Directory
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="link-pointer"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  All Resources
                </a>
              </li>
              <li>
                <a
                  href="mailto:programs@aafederation.org"
                  className="link-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <article className="[ bg-img-vector ] [ nav-grid-hero ]">
        <div className="[ center-text-section ] [ flow wrapper ] [ overlay ] ">
          <div className="text-800 font-serif weight-black color-white">
            MENTAL HEALTH HUB
          </div>
          <div className="text-500 md:text-600 weight-bold color-white">
            Lobortis morbi lectus in varius lectus. Dictumst dui at quam iaculis
            interdum. Eget sem neque eget ut venenatis duis.
          </div>
        </div>
      </article>
      <div className="nav-grid-button nav-hamburger">
        <div className="wrapper pad-top-500">
          <nav
            id="dl-menu"
            className="dl-menuwrapper font-serif right-align"
            role="navigation"
          >
            <button
              id="dl-menu-button"
              className="dl-trigger display-block right-align margin-top-005rem bg-secondary"
            >
              Open Menu
            </button>
            <ul id="dl-menu-options" className="dl-menu bg-secondary">
              <li className="display-none-important" id="go-back-hamburger">
                <a>❮ Back To Search Results</a>
              </li>
              <li id="go-home-hamburger">
                <a href="/">Directory Home</a>
              </li>
              <li>
                <a
                  href="https://forms.gle/BKeJSPd3vBY37GCr8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Directory
                </a>
              </li>
              <li>
                <a href="mailto:MH.Directory@aafederation.org">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
