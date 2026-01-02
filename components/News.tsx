
import React from 'react';
import { NEWS_DATA } from '../constants';

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">News & Insights</span>
            <h2 className="text-3xl md:text-5xl font-extrabold dark:text-white leading-tight">
              Exploring the Forefront of<br />Modern Web Development
            </h2>
          </div>
          <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-dark hover:border-primary-dark transition-all">
            View All Posts
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((post) => (
            <div key={post.id} className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[0.6rem] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs text-gray-400 mb-2 block">{post.date}</span>
                <h5 className="text-lg font-bold text-gray-800 dark:text-white leading-snug group-hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
