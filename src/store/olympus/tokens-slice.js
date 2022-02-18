import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const axios = require("axios");
const endpoint = "https://api.studio.thegraph.com/query/19156/olympus/v0.0.1"
const graphqlQuery = {
    operationName: "Tokens",
    query: `query Tokens{
        tokens(subgraphError: deny){
          id
        }
      }`,
    variables: {}
};
export const fetchTokens = createAsyncThunk("tokens/fetchTokens", async () =>{
    try{
        const response = await axios.post(endpoint, graphqlQuery)
        if(!response.data.data){
            throw new Error('No data returned')
        }
        if(!response.data.data.tokens){
            throw new Error('No data returned')
        }
        console.log(response.data)
        return response.data.data.tokens
    }catch(err){
        console.error(err);
    }
})
const tokensSlice = createSlice({
    name: "tokens",
    initialState:{
        fetchingStatus: 'pending',
        tokens: []
    },
    reducers:{

    },
    extraReducers(builders){
        builders
        .addCase(fetchTokens.pending, (state, action) =>{
            state.fetchingStatus = 'pending'
        })
        .addCase(fetchTokens.fulfilled, (state, action) =>{
            state.fetchingStatus = 'fulfilled'
            state.tokens = action.payload?.map(token => token.id)
        })
        .addCase(fetchTokens.rejected, (state, action) =>{
            state.fetchingStatus = 'rejected'
        })
    }
})
export default tokensSlice.reducer