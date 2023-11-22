import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import sanitizeHtml from "sanitize-html";
import tags from "./Tags";
import logo from "./logo.png";

const Header = () => {
  // Get url parameters
  const urlParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  // If the tag is defined, then we filter the questions
  const tag = urlParams.get("tag");

  // If the tag is defined, sanitize it
  const sanitizedTag = tag ? sanitizeHtml(tag) : null;

  // If the tag is defined, then we add it to the title and show the tag icon
  const title = sanitizedTag
    ? `Censys Search Questions for ${sanitizedTag}`
    : "Censys Search Questions";
  document.title = title;
  const icon = sanitizedTag
    ? tags.find((tag) => tag.name.toLowerCase() === sanitizedTag.toLowerCase())
        ?.icon
    : null;

  return (
    <header className="bg-white shadow">
      <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo and title container */}
        <div className="flex items-center">
          <div className="h-12 w-12 mr-2 rounded-full flex justify-center items-center">
            <img src={logo} alt="Censys Logo" />
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 ml-0">
            {title}
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                className="ml-2 text-gray-500 text-xl"
              />
            )}
          </h1>
        </div>
        {/* Search bar */}
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
          placeholder="Search..."
          defaultValue={new URLSearchParams(window.location.search).get(
            "query"
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const query = e.target.value;
              if (query) {
                window.location.href =
                  import.meta.env.BASE_URL +
                  `?query=${encodeURIComponent(query)}`;
              } else {
                window.location.href = import.meta.env.BASE_URL;
              }
            }
          }}
        />
      </div>
    </header>
  );
};

export default Header;
