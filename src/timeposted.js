import React from "react";

export const TimePosted = props => {
  return (
    <div className="time-posted">
      Posted at {props.time === "" ? "18:00" : props.time}
    </div>
  );
};
