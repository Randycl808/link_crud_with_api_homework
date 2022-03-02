import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider'
import Link from './Link'

const Links = ()=>{
    //useContext always return object just destructor keys
    
    const { links, getLinks, createLink, updateLink ,deleteLink} = useContext(DataContext)

    const renderLinks=()=>{
      return links.map((link)=>{
        return <Link key={link.id} {...link} deleteLink={deleteLink} updateLink={updateLink}/>
      })
    }

    return (
        <div>
        <h1>Links here</h1>

        <div>{links && renderLinks()}</div>

        {/* <div>{JSON.stringify(links)}</div> */}
        <button onClick={getLinks}>Get Links</button>
        <button onClick={()=>createLink( {title:'Hi , Its Randy. This is my create CRUD working. :)', username:'randyc'} )}>create link</button>
        <button onClick={()=>updateLink( {id:29, title:'Updated by Randy C'} )}>update link</button>
        <button onClick={()=>deleteLink(29)}>delete link</button>
        </div>
    )
}

export default Links