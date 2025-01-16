import React from 'react';

async function getRepoData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/data/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data for slug: ${slug}`);
  }

  return res.json();
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) {
    return (
      <div>
        <h1>Error: Missing slug</h1>
      </div>
    );
  }

  let repo;

  try {
    repo = await getRepoData(slug);
  } catch (error) {
    console.error(error);
    return (
      <div>
        <h1>Error loading post</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Blog Post: {repo.title}</h1>
      <pre>{JSON.stringify(repo, null, 2)}</pre>
    </div>
  );
}
