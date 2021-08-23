import { GETCOURSELIST ,GETCOURSEDETAIL ,ADDTOCART , REMOVEFROMCART, EMPTYCART} from "./action";

const initialState = {
    coursesList : [],
    coursesDetail : {},
    cartData:[],
   
    isProductsLoading : true,
    isProductDetailLoading : true
}


export const CoursesReducer =(state =initialState ,action)=>{
    switch(action.type){
        case GETCOURSELIST :
            return {
                ...state , 
                coursesList : action.payload,
                isProductsLoading : false
            }  
            case GETCOURSEDETAIL :
                return {
                    ...state , 
                    coursesDetail : action.payload,
                    isProductDetailLoading : false
                }
            case ADDTOCART :
                return{
                    ...state , 
                    cartData :  [ ...state.cartData   ,action.payload],
                    isProductDetailLoading : false
                }
            case REMOVEFROMCART :
                return{
                    ...state , 
                    cartData :  [ ...state.cartData ,action.payload],
                    isProductDetailLoading : false
                    }
        default :
            return {...state}  
    }
}