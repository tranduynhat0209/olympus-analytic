import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const axios = require("axios");
const endpoint = "https://api.studio.thegraph.com/query/19156/olympus/v0.0.1"
const graphqlQuery = {
    operationName: "Stakes",
    query: `query Stakes{
        stakes(subgraphError: deny, orderBy: timestamp, orderDirection: desc,
          first: 1000
        ){
          timestamp
          amount
          transaction{
            from
          }
        }
      }`,
    variables: {}
};
export const fetchStakes = createAsyncThunk("stakes/fetchStakes", async () =>{
    try{
        const response = await axios.post(endpoint, graphqlQuery)
        if(!response.data.data){
            throw new Error('No data returned')
        }
        if(!response.data.data.stakes){
            throw new Error('No data returned')
        }
        console.log(response.data)
        return response.data.data.stakes
    }catch(err){
        console.error(err);
    }
})
const stakesSlice = createSlice({
    name: "stakes",
    initialState:{
        fetchingStatus: 'pending',
        stakes: []
    },
    reducers:{

    },
    extraReducers(builders){
        builders
        .addCase(fetchStakes.pending, (state, action) =>{
            state.fetchingStatus = 'pending'
        })
        .addCase(fetchStakes.fulfilled, (state, action) =>{
            state.fetchingStatus = 'fulfilled'
            state.stakes = action.payload
        })
        .addCase(fetchStakes.rejected, (state, action) =>{
            state.fetchingStatus = 'rejected'
        })
    }
})
export default stakesSlice.reducer