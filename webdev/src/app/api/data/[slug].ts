import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data'; // Assuming you have a JSON file with post data

interface Post {
  slug: string;
  title: string;
  content: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse 
): void {
  const { slug } = req.query;

  console.log('Slug received in API:', slug);

  const post = (data as Post[]).find((item) => item.slug === slug);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
}

