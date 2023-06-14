import { DM_Serif_Display } from 'next/font/google'

const dm_serif = DM_Serif_Display({ subsets: ['latin'], weight: ["400"] })

function Card({ data }) {
  const { image, title, category, author } = data
  return (<>
    <a href="/post/top-7-low-power" className="flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-gray-50 group cursor-pointer">
      <div className="overflow-hidden">
        <img src={image} alt="" className="aspect-video object-cover hover:scale-110 transition-all" />
      </div>
      <div className="flex flex-col p-6 space-y-2 flex-1">
        <span className="text-sm font-bold capitalize text-gray-700">{category}</span>
        <h2 className={`text-xl ${dm_serif.className} line-clamp-3`}>{title}</h2>
      </div>
      <div className="flex items-center justify-between px-6 pb-6">
        <button className="flex items-center justify-center space-x-2">
          <div className="overflow-hidden h-7 w-7 rounded-full">
            <img src={author.image} alt="razikdontcare" />
          </div>
          <span className="text-sm">{author.name}</span>
        </button>
        <div className="rounded-full overflow-hidden w-6 h-6 border border-gray-700/50 p-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
        </div>
      </div>
    </a>
  </>
  );
}

export default Card;