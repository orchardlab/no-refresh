import fs from "fs";
import xml2js from "xml2js";
import { AppConfig } from "..";
import { Feed } from "./rss_puller";

export async function parseOPML(appConfig: AppConfig): Promise<Feed[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(appConfig.opmlFilePath, (err, data) => {
      if (err) {
        reject(err);
      }

      xml2js.parseString(data, (err, result: any) => {
        if (err) {
          reject(err);
        }

        const outlines = result.opml.body[0].outline;
        const allOutlines = outlines
          .flatMap((o: any) => {
            if (o.outline) {
              return o.outline;
            }
            return o;
          })
          .filter((o: any) => {
            return o["$"].xmlUrl;
          })
          .map((outline: any) => {
            return outline["$"];
          });
        resolve(allOutlines);
      });
    });
  });
}
