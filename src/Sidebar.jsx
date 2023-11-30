import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import tags from "./Tags";

const Sidebar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <div className="w-38 md:w-64 flex-none bg-gray-100 p-6 overflow-y-auto">
      <h2 className="font-bold text-xl mb-4">Tags</h2>
      <div className="flex flex-col">
        <a
          href={import.meta.env.BASE_URL}
          className="text-gray-700 hover:bg-gray-200 rounded-md p-2 m-1"
          aria-label="All"
        >
          <FontAwesomeIcon icon={faAsterisk} className="mr-2" />
          {/* Show nothing if the screen is extra small */}
          {isExtraSmallScreen ? "" : "All"}
        </a>
        {/* Link to /?tag={tag}, comma separated */}
        {tags.map((tag) => (
          <a
            key={tag.name}
            href={
              import.meta.env.BASE_URL + `?tag=${encodeURIComponent(tag.name)}`
            }
            className="text-gray-700 hover:bg-gray-200 rounded-md p-2 m-1"
            aria-label={tag.name}
          >
            <FontAwesomeIcon icon={tag.icon} className="mr-2" />
            {/* Show nothing if the screen is extra small */}
            {isExtraSmallScreen
              ? ""
              : isSmallScreen && tag.shortName
              ? tag.shortName
              : tag.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
