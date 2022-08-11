import type { NextApiRequest, NextApiResponse } from 'next'
import ApiVideoClient from '@api.video/nodejs-client'

const getVideoDetails = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { videoId } = req.query
    const client = new ApiVideoClient({ apiKey: process.env.API_KEY })
    const video = await client.videos.get(videoId as string)
    res.status(200).json({ video })
  } catch (error) {
    res.status(400).end()
  }
}

export default getVideoDetails
