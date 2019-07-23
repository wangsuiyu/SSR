export const state = ()=>{
   return {
       hotelInfo:{
          location:{},
          city:{}
       }
   } 
}

export const mutations = {
    getHotelInfo(state,data){
        state.hotelInfo = data
    }
}