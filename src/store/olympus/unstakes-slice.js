import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const axios = require("axios");
const endpoint = "https://api.studio.thegraph.com/query/19156/olympus/v0.0.1"
const graphqlQuery = {
    operationName: "Unstakes",
    query: `query Unstakes{
        unstakes(subgraphError: deny, orderBy: timestamp, orderDirection: desc,
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
export const fetchUnstakes = createAsyncThunk("unstakes/fetchUnstakes", async () =>{
    try{
        const response = await axios.post(endpoint, graphqlQuery)
        if(!response.data.data){
            throw new Error('No data returned')
        }
        if(!response.data.data.unstakes){
            throw new Error('No data returned')
        }
        console.log(response.data)
        return response.data.data.unstakes
    }catch(err){
        console.error(err);
    }
})
const unstakesSlice = createSlice({
    name: "unstakes",
    initialState:{
        fetchingStatus: 'pending',
        unstakes: []
    },
    reducers:{

    },
    extraReducers(builders){
        builders
        .addCase(fetchUnstakes.pending, (state, action) =>{
            state.fetchingStatus = 'pending'
        })
        .addCase(fetchUnstakes.fulfilled, (state, action) =>{
            state.fetchingStatus = 'fulfilled'
            state.unstakes = action.payload
        })
        .addCase(fetchUnstakes.rejected, (state, action) =>{
            state.fetchingStatus = 'rejected'
        })
    }
})
export default unstakesSlice.reducer