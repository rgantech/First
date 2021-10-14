import React from 'react'

export default function Alert(props) {

  const captilize = (word) => {

   const lower = word.toLowerCase();
   return lower.charAt(0).toUpperCase() + lower.slice(1); 

  }

    return (
       props.alertmsg && <div className={`alert alert-${props.alertmsg.type} alert-primary`} role="alert">
       <strong>{captilize(props.alertmsg.type)}:</strong> {props.alertmsg.msg}
      </div>
    )
}
