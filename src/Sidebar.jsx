const Sidebar = () => {
  // Mock data for the tags
  const tags = [
    "Geolocation",
    "Operating System",
    "Service",
    "Software",
    "Web Technology",
    "TLS",
    "Label",
    "Malware",
  ];

  return (
    <div className="w-64 flex-none bg-gray-100 p-6 overflow-y-auto">
      <h2 className="font-bold text-xl">Tags</h2>
      <div className="flex flex-col">
        <a
          href="/"
          className="text-gray-700 hover:bg-gray-200 rounded-md p-2 m-1"
        >
          All
        </a>
        {/* Link to /?tag={tag}, comma separated */}
        {tags.map((tag) => (
          <a
            key={tag}
            href={`/?tag=${encodeURIComponent(tag)}`}
            className="text-gray-700 hover:bg-gray-200 rounded-md p-2 m-1"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
