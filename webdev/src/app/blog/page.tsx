// 'use client';

// // import React, { useEffect, useState, useCallback } from 'react';
// // // import Link from 'next/link';

// // interface Post {
// //   title: string;
// //   content: string;
// // }

// // const Blog: React.FC = () => {
// //   const [data, setData] = useState<Post[]>([]);
// //   const [page, setPage] = useState(1); // Current page for data loading
// //   const [loading, setLoading] = useState(false); // Loading state to prevent multiple fetches
// //   const [hasMore, setHasMore] = useState(true); // Flag to check if more data is available

// //   const fetchData = useCallback(async () => {
// //     if (loading || !hasMore) return; // Prevent redundant fetches

// //     setLoading(true);
// //     try {
// //       const res = await fetch(`/api/data?page=${page}`);
// //       if (!res.ok) {
// //         throw new Error(`HTTP error! status: ${res.status}`);
// //       }

// //       const result: Post[] = await res.json();

// //       if (result.length > 0) {
// //         setData((prevData) => [...prevData, ...result]);
// //         setPage((prevPage) => prevPage + 1); // Increment page for next fetch
// //       } else {
// //         setHasMore(false); // No more data available
// //       }
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [page, loading, hasMore]);

//   // Fetch initial data
// //   useEffect(() => {
// //     fetchData();
// //   }, [fetchData]);

// //   // Infinite scroll logic
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (
// //         window.innerHeight + document.documentElement.scrollTop >=
// //         document.documentElement.offsetHeight - 100
// //       ) {
// //         fetchData();
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [fetchData]);

//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index} className="post block w-1/2 mx-auto">
//           {/* Safeguard for missing or invalid title */}
//           {/* <Link
//             href={`/blog/${
              
//                 ? item.title.replace(/\s+/g, '-').toLowerCase()
//                 : 'untitled'
//             }`}
//           > */}
//             <h1 className="font-serif">{item.title || 'Untitled Post'}</h1>
//           {/* </Link> */}
//           <p className="w-[750px]">
//             {item.content && typeof item.content === 'string'
//               ? item.content.substring(0, 150) + '...'
//               : 'No content available'}
//           </p>
//           <button className="p-2 my-4 rounded-lg bg-gray-400">Read More</button>
//         </div>
//       ))}

//       {loading && <p>Loading more posts...</p>}
//       {!hasMore && <p>No more posts to display.</p>}
//     </div>
//   );
// };

// export default Blog;
import React from 'react'

function blog() {
  return (
    <div>blog</div>
  )
}

export default blog