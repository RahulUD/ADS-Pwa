import React from "react";
import AllListCard from "./AllCardList";
import AvatarNameCardBox from "./AvatarNameCardBox";
import StdCardList from "./StdCardList";

// components

export default function CardContactBox() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex-1 justify-start">
            <AllListCard />
            <StdCardList />
          </div>
        </div>
        <div className="flex flex-wrap">
        <AvatarNameCardBox name='Rahul' icon="fa-window-close" avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' /><AvatarNameCardBox name='Rahul' avatar='https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.53033970.jpg' />
        </div>
      </div>
    </>
  );
}
