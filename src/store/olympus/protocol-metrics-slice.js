import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const axios = require("axios");
const endpoint = "https://api.studio.thegraph.com/query/19156/olympus/v0.0.1"
const graphqlQuery = {
    operationName: "ProtocolMetrics",
    query: `query ProtocolMetrics{
        protocolMetrics(subgraphError: deny, orderDirection: desc, orderBy: timestamp){
          id
          timestamp
          ohmCirculatingSupply
          sOhmCirculatingSupply
          totalSupply
          ohmPrice
          marketCap
          totalValueLocked
          nextEpochRebase
          nextDistributedOhm
          currentAPY
          holders
        }
    }`,
    variables: {}
};
export const fetchProtocolMetrics = createAsyncThunk("protocolMetrics/fetchProtocolMetrics", async () =>{
    try{
        const response = await axios.post(endpoint, graphqlQuery)
        if(!response.data.data){
            throw new Error('No data returned')
        }
        if(!response.data.data.protocolMetrics){
            throw new Error('No data returned')
        }
        console.log(response.data)
        return response.data.data.protocolMetrics
    }catch(err){
        console.error(err);
    }
})
const protocolMetricsSlice = createSlice({
    name: "protocolMetrics",
    initialState:{
        fetchingStatus: 'pending',
        protocolMetrics: []
    },
    reducers:{

    },
    extraReducers(builders){
        builders
        .addCase(fetchProtocolMetrics.pending, (state, action) =>{
            state.fetchingStatus = 'pending'
        })
        .addCase(fetchProtocolMetrics.fulfilled, (state, action) =>{
            state.fetchingStatus = 'fulfilled'
            state.protocolMetrics = action.payload
        })
        .addCase(fetchProtocolMetrics.rejected, (state, action) =>{
            state.fetchingStatus = 'rejected'
        })
    }
})
export default protocolMetricsSlice.reducer