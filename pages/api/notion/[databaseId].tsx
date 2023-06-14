import { NextApiRequest, NextApiResponse } from 'next'
import { Client } from "@notionhq/client"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const notion = new Client({
    auth: process.env.NOTION_KEY,
  })

  const { databaseId } = req.query

  const database_id = (Array.isArray(databaseId)) ? databaseId[0] : databaseId

  let result
  // TODO: Support GET filtering and sorting
  if (req.method === 'GET') {  
  // TODO: Support singular get
  result = await notion.databases.query({
      database_id
    })  
  }

  if (req.method === 'POST') {
    const body = req.body
    result = await notion.pages.create({
      parent: { database_id },
      properties: body
    })
  }

  // TODO: Support singular put and delete

  return res.status(200).json({ result })
}