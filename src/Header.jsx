import sanitizeHtml from "sanitize-html";
import logo from "./logo.png";

const Header = () => {
  // Get the tag from the URL parameter
  const tag = new URLSearchParams(window.location.search).get("tag");

  // If the tag is defined, sanitize it
  const sanitizedTag = tag ? sanitizeHtml(tag) : null;

  return (
    <header className="bg-white shadow">
      <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo and title container */}
        <div className="flex items-center">
          <div className="h-12 w-12 mr-2 rounded-full flex justify-center items-center">
            <img src={logo} alt="Censys Logo" />
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 ml-0">
            Censys Search Questions {sanitizedTag ? `for ${sanitizedTag}` : ""}
          </h1>
        </div>
        {/* Search bar */}
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
          placeholder="Search... (Coming soon!)" // TODO: Add search functionality
          disabled={true}
        />
      </div>
    </header>
  );
};

export default Header;
