import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("India");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php?", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term
        }
      });

      setResult(data.query.search);
    };

    if (term && !result.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term)
          // if the term is entered then perform search otherwise dont
          search();
      }, 600);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = result.map((results, index) => {
    return (
      <div key={results.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${results.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{results.title}</div>
          <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Welcome to Wiki Search</h1>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" onChange={(e) => setTerm(e.target.value)} />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
