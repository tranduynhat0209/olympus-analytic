import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const axios = require("axios");
const endpoint = "https://api.studio.thegraph.com/query/19156/olympus/v0.0.1"
const graphqlQuery = (token) => ({
    operationName: "DailyBonds",
    query: `query DailyBonds($token: String!){
        dailyBonds(subgraphError: deny, orderBy: timestamp, orderDirection: desc,
        where:{
          token: $token
        }, first: 1000
        ){
          timestamp
          amount
          value
        }
      }`,
    variables: {
        "token": token
    }
});
export const fetchDailyBonds = createAsyncThunk("dailyBonds/fetchDailyBonds", async (token) =>{
    try{
        const response = await axios.post(endpoint, graphqlQuery(token))
        if(!response.data.data){
            throw new Error('No data returned')
        }
        if(!response.data.data.dailyBonds){
            throw new Error('No data returned')
        }
        
        return {
            token: token,
            dailyBonds: response.data.data.dailyBonds
        }
    }catch(err){
        console.error(err);
    }
})

const dailyBondsSlice = createSlice({
    name: "dailyBonds",
    initialState:{
        fetchingStatus: 'pending',
        dailyBonds:{

        }
    },
    reducers:{

    },
    extraReducers(builders){
        builders
        .addCase(fetchDailyBonds.pending, (state, action) =>{
            state.fetchingStatus = 'pending'
        })
        .addCase(fetchDailyBonds.fulfilled, (state, action) =>{
            state.fetchingStatus = 'fulfilled'
            const token = action.payload.token
            const dailyBonds = action.payload.dailyBonds
            
            state.dailyBonds[token] = dailyBonds
            
        })
        .addCase(fetchDailyBonds.rejected, (state, action) =>{
            state.fetchingStatus = 'rejected'
        })
    }
})
export default dailyBondsSlice.reducer