import TagPopOver from 'components/PopOver/TagPopOver'
import React from 'react'

const MessageTag = (props) => {
    return (
        <>
        <div className="text-center flex flex-wrap m-2 justify-start">
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           <TagPopOver tag='#name' description="this is descrition of the tag."/>
           </div>
        </>
    )
}
export default MessageTag