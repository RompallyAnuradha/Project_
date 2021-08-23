export const GETCOURSELIST = "GETCOURSELIST"
export const GETCOURSEDETAIL ="GETCOURSEDETAIL"
export const ADDTOCART ="ADDTOTOCART"
export const REMOVEFROMCART ="REMOVEFROMCART"


export const dispatchCourseList =(data)=>dispatch=>{
    return dispatch({
        type : GETCOURSELIST,
        payload : data 
    })
}


export const dispatchCourseDetail = (data) => dispatch =>{
    return dispatch({
        type : GETCOURSEDETAIL,
        payload : data
    })
}

export const dispatchAddTocart = (data ,history) => dispatch =>{
    history.push('/cart')
   
    return dispatch({
        type : ADDTOCART,
        payload : data
    })
}
export const dispatchRemoveFromcart = (data) => dispatch =>{
    
   
    return dispatch({
        type : REMOVEFROMCART,
        payload : data
    })
}