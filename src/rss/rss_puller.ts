import RSSParser from "rss-parser";

const parser = new RSSParser();
import { RateLimiter } from "limiter";

export interface Feed {
  text: string;
  title: string;
  description: string;
  type: string;
  version: string;
  htmlUrl: string;
  xmlUrl: string;
}

async function* promisePool<T>(poolLimit: number, promises: Promise<T>[]) {
  let i = 0;

  while (i < promises.length) {
    const end = i + poolLimit;
    yield Promise.all(promises.slice(i, end));
    i = end;
  }
}

export type RSSParseResult = Awaited<ReturnType<typeof parser.parseURL>>;

export async function pullAllFeeds(
  feeds: Feed[],
  timezone: string
): Promise<RSSParseResult[]> {
  let finalResults: RSSParseResult[] = [];

  for (let { xmlUrl } of feeds) {
    try {
      console.log(`Parsing ${xmlUrl}`);
      const parsed = await parser.parseURL(xmlUrl);
      finalResults.push(parsed);
      console.log(`${parsed.title} - ${parsed.items.length}`);
    } catch (error) {}
  }
  return finalResults;
}
