import { NextApiRequest, NextApiResponse } from 'next'
import { Client } from "@notionhq/client"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const notion = new Client({
    auth: process.env.NOTION_KEY,
  })

  const { databaseId } = req.query

  const database_id = (Array.isArray(databaseId)) ? databaseId[0] : databaseId

  let result
  if (req.method === 'GET') {  
    result = await notion.databases.query({
      database_id
    })  
  }

  if (req.method === 'POST') {
    const body = req.body
    console.log('b', body)
    result = await notion.pages.create({
      parent: { database_id },
      properties: body
        
        // title: {
        //   title:[
        //     {
        //       "text": {
        //         "content": 'ok'
        //       }
        //     }
        //   ]
        // }
      ,
    })
  }
  return res.status(200).json({ result })
}