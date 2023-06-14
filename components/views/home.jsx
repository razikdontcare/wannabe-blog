import React from 'react';
import Card from './card';
import posts from '../posts.json'

function Homepage() {
  return (<>
    <div className="p-10 flex flex-col items-center justify-center container mx-auto prose space-y-3">
      <span className="font-medium text-sm">Blog</span>
      <h1 className="text-center">Discover Our Latest Posts</h1>
    </div>

    <div className="container mx-auto max-w-5xl grid grid-cols-3 gap-3">
      {posts.map((post, i) => (
        <Card key={i} data={post} />
      ))}
    </div>
  </>);
}

export default Homepage;