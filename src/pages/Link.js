import React from "react";

const Link = (link)=> {
  return (
    <div>
      <h1>ID:{link.id}</h1>
      <h1>Username: {link.username}</h1>
      <h1>Title:{link.title}</h1>
    </div>
  )
}

export default Link