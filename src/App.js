import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles.js'
const alanKey =
  "4798ee3d5658c5e6a4fc915ffac235ed2e956eca572e1d8b807a3e2338fdd0dc/stage";

// &  NewsAPI.org
// const API_KEY

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles); /*  hooking the newarticles to articles */

        }
      },
    });
  }, []); /* if we leave array empty it means the function will run once */
  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://www.victoria.ca/images/logo-victoria-print.png" className={classes.alanLogo} width="168" height="78" alt="Logo" id="print-logo" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
