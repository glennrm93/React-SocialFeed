import React from "react";

export const Avatar = props => {
  return (
    <img alt={props.name} src={props.avatarUrl} width="50px" height="50px" />
  );
};
