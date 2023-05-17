import { parseOPML } from "./rss/parse_opml";
import { pullAllFeeds } from "./rss/rss_puller";

console.log("yes");

// timezone and other configs
// puller / rss / mastodon etc / newsletters
// into Article[]
// save to disk
// pandoc convert to epub

export interface AppConfig {
  timezone: string;
  // where is the opml file located in the file
  opmlFilePath: string;
}

interface FetchArticlesFunction {
  (appConfig: AppConfig): Promise<Article[]>;
}

interface ArticlesPersistent {
  (articles: Article[]): Promise<void>;
}

interface Article {
  title: string;
  author: string;
  content: string;
}

const persistArticles = async (articles: Article[]) => {};

// this guy will parse opml and figure out today's new articles
// then return the article objects
const RSSPuller: FetchArticlesFunction = async (appConfig: AppConfig) => {
  const ss = await fetch("sdfsfd");
  return [];
};

const pipeline = async (appConfig: AppConfig) => {
  // here we run the pipeline
  const pullers: FetchArticlesFunction[] = [];
  const executions = await Promise.all(pullers.map((p) => p(appConfig)));
  // now we have all the articles we can save
  await persistArticles(executions.flat(2));
  // trigger pandoc
  await generateEPUB();
};

async function generateEPUB() {
  throw new Error("Function not implemented.");
}

(async () => {
  const appConfig: AppConfig = {
    opmlFilePath: "subs.opml",
    timezone: "Los Angeles",
  };
  // abstract this into
  const ss = await parseOPML(appConfig);
  console.log(ss);
  const parsedRSSResults = await pullAllFeeds(ss, appConfig.timezone);

  // save to disk
})();
