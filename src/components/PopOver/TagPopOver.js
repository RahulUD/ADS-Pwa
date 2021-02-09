import React from "react";
import { createPopper } from "@popperjs/core";

const TagPopOver = (props) => {
    const [popoverShow, setPopoverShow] = React.useState(false);
    const btnRef = React.createRef();
    const popoverRef = React.createRef();
    const openPopover = () => {
        createPopper(btnRef.current, popoverRef.current, {
            placement: "bottom"
        });
        setPopoverShow(true);
    };
    const closePopover = () => {
        setPopoverShow(false);
    };
    return (
        <>
            <div className="rounded" style={{ margin: '2px', padding: '2px' }}>
                <div className="text-center">
                    <span className="cursor-pointer text-xs font-semibold inline-block rounded text-blue-600"
                        onMouseEnter={() => openPopover()}
                        onMouseLeave={() => closePopover()}
                        ref={btnRef}
                    >
                        {props.tag}
                    </span>
                    <div
                        className={
                            (popoverShow ? "" : "hidden ") +
                            "bg-blue-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg text-white-500"
                        }
                        ref={popoverRef}
                    >
                        <div>
                            <div className="text-white p-3">
                                {props.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TagPopOver;