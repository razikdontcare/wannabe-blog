import React from 'react';
import Header from '@/components/layout/header';

import { DM_Serif_Display } from 'next/font/google'

const dm_serif = DM_Serif_Display({ subsets: ['latin'], weight: ["400"] })

function Post() {
  return (<>
    <Header>
      <div className="container mx-auto max-w-5xl p-6">
        <div className="flex items-center justify-start">
          <span className="text-gray-500">13 Juni 2023</span>
        </div>
        <h1 className={`text-7xl my-5 ${dm_serif.className}`}>How to Survive as a Digital Illustrator in Digital Era.</h1>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <div className="rounded-full overflow-hidden w-12 h-12">
              <img src="https://picsum.photos/500" alt="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lg font-bold">Razik</span>
              <span className="text-sm text-gray-500">Web Developer</span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden py-6 w-full">
          <img src="https://picsum.photos/1024" alt="" className="aspect-video object-cover" />
        </div>

        <div className="py-2 prose prose-lg prose-neutral container mx-auto">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nesciunt.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum iste, modi aliquam in voluptas cupiditate qui voluptate, vero impedit ab excepturi laudantium laborum at nobis maiores cum. Ad sit natus consequatur, esse voluptates suscipit ut quae praesentium architecto eligendi deleniti ducimus mollitia facilis unde voluptatem minima blanditiis iusto laudantium consequuntur magni qui pariatur. Quae aperiam iure fuga, animi consectetur iste expedita omnis quisquam quibusdam. Iusto rem nostrum at tempore quo nihil veniam dolorem explicabo optio. Consectetur laborum libero harum eaque, eius officiis ipsa reiciendis perferendis tempore sapiente a dolorum. Error sunt dignissimos quibusdam, rerum omnis quaerat voluptatem iure modi maiores?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum iste, modi aliquam in voluptas cupiditate qui voluptate, vero impedit ab excepturi laudantium laborum at nobis maiores cum. Ad sit natus consequatur, esse voluptates suscipit ut quae praesentium architecto eligendi deleniti ducimus mollitia facilis unde voluptatem minima blanditiis iusto laudantium consequuntur magni qui pariatur. Quae aperiam iure fuga, animi consectetur iste expedita omnis quisquam quibusdam. Iusto rem nostrum at tempore quo nihil veniam dolorem explicabo optio. Consectetur laborum libero harum eaque, eius officiis ipsa reiciendis perferendis tempore sapiente a dolorum. Error sunt dignissimos quibusdam, rerum omnis quaerat voluptatem iure modi maiores?</p>
          <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, obcaecati eaque!</blockquote>
          <img src="https://picsum.photos/1024" alt="" />
        </div>
      </div>
    </Header>
  </>);
}

export default Post;