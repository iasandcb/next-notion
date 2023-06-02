import { NextApiRequest, NextApiResponse } from 'next'
import { Client } from "@notionhq/client"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const results = {result: 'ok'}

  const notion = new Client({
    auth: process.env.NOTION_KEY,
  })

  console.log('n', notion)

  const databaseId = process.env.NOTION_DATABASE_ID

  const response = await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      title: {
        title:[
          {
            "text": {
              "content": 'ok'
            }
          }
        ]
      }
    },
  })
  console.log(response)

  res.status(200).json(results)
}
