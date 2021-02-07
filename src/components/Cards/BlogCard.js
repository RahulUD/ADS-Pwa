import React from 'react'
const BlogCard = (props) => {
    return (
        <>
            <div className="max-w-md w-full lg:flex">
                <div className="h-20 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url("https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg")`}} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                        <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                        <div className="text-sm">
                            <p className="text-black leading-none">Jonathan Reinink</p>
                            <p className="text-grey-dark">Aug 18</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard