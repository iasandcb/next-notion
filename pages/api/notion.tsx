import { NextApiRequest, NextApiResponse } from 'next'
import { Client } from "@notionhq/client"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const results = {result: 'ok'}

  const notion = new Client({
    auth: '',
  })

  console.log('n', notion)

  const response = await notion.pages.create({
    parent: { database_id: '77e66ffdce904914b5c1f21490e15f13' },
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
