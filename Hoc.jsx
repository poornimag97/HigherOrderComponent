import React from "react";
const Hoc=(WrappedComponet)=>{
    return()=>{
     return   <WrappedComponet data="hello" />
    }
}
export default Hoc


