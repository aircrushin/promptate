// notion.js
import { Client } from '@notionhq/client';

// 初始化一个Notion客户端
const notion = new Client({ auth: "secret_Pl8Y1z6T1B9F5d4RdjototjAnDSOC1SLBqwcLd865mQ" });

export async function fetchNotionDatabase(databaseId = 'a876ec945ba344e7a836da12965cf477') {
    try {
      const response = await notion.databases.query({ database_id: databaseId });
      console.log(response);
    //   return response.results.map(page => ({
    //     button: page.properties.Type.title[0]?.plain_text,
    //     text: page.properties.Keyword.rich_text[0]?.plain_text,
    //     detail: page.properties.Detail.rich_text[0]?.plain_text,
    //     color: page.properties.Color.select.name,
    //   }));
    } catch (error) {
      console.error("从Notion获取数据时发生错误:", error);
      return [];
    }
  }

export default notion;
