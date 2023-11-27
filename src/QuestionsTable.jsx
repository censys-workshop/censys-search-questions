import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import tags from "./Tags";
import QUESTIONS from "./questions.json";

const QuestionsTable = () => {
  // Get screen size
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  // Get url parameters
  const urlParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  // If the tag is not defined, then we show all the questions
  const [filteredQuestions, setFilteredQuestions] = useState(QUESTIONS);

  useEffect(() => {
    // If the tag is defined, then we filter the questions
    const tag = urlParams.get("tag");
    // If the query is defined, then we filter the questions
    const query = urlParams.get("query");

    // If both tag and query are defined, then we filter the questions
    if (tag && query) {
      setFilteredQuestions(
        QUESTIONS.filter(
          (question) =>
            question.tags
              .map((tag) => tag.toLowerCase())
              .includes(tag.toLowerCase()) &&
            (question.title + question.query)
              .toLowerCase()
              .includes(query.toLowerCase())
        )
      );
    }
    // If only the tag is defined, then we filter the questions
    else if (tag) {
      setFilteredQuestions(
        QUESTIONS.filter((question) =>
          question.tags
            .map((tag) => tag.toLowerCase())
            .includes(tag.toLowerCase())
        )
      );
    }
    // If only the query is defined, then we filter the questions
    else if (query) {
      setFilteredQuestions(
        QUESTIONS.filter((question) =>
          (question.title + question.query)
            .toLowerCase()
            .includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredQuestions(QUESTIONS);
    }
  }, [urlParams]);

  // Create an efficient lookup table for tags and their short names
  const tagsShortNames = useMemo(
    () =>
      tags.reduce((acc, tag) => {
        acc[tag.name.toLowerCase()] = tag.shortName;
        return acc;
      }, {}),
    []
  );

  return (
    <div className="min-w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                aria-label="Question"
              >
                Question
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                aria-label="Censys Query"
              >
                Censys Query
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                aria-label="Tags"
              >
                Tags
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* If there are no questions, then we show a message */}
            {filteredQuestions.length === 0 ? (
              <tr>
                <td className="px-6 py-4 whitespace-wrap" colSpan="3">
                  <div className="text-sm font-medium text-gray-900">
                    No questions found
                  </div>
                </td>
              </tr>
            ) : (
              filteredQuestions.map((question) => (
                <tr key={question.id}>
                  <td className="px-6 py-4 whitespace-wrap">
                    <div className="text-sm font-medium text-gray-900" aria-label="Question Title">
                      {question.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-wrap">
                    <div className="text-sm font-medium text-gray-900" aria-label="Censys Query">
                      <a
                        href={`https://search.censys.io/search?resource=hosts&q=${encodeURIComponent(
                          question.query
                        )}&ref=questions`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:underline"
                      >
                        {question.query}
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-wrap">
                    <div className="text-sm font-medium text-gray-900" aria-label="Tags">
                      {question.tags.map((tag) => (
                        <a
                          key={tag}
                          href={
                            import.meta.env.BASE_URL +
                            `?tag=${encodeURIComponent(tag)}`
                          }
                          className="inline-block bg-blue-800 text-white px-2 py-1 rounded-full text-xs mr-2 mb-2"
                          style={{ maxWidth: "150px" }}
                        >
                          {/* {tagsShortNames[tag.toLowerCase()] || tag} */}
                          {isSmallScreen
                            ? tagsShortNames[tag.toLowerCase()] || tag
                            : tag}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionsTable;
