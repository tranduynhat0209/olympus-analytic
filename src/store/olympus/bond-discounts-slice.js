import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const axios = require("axios");
const endpoint = "https://api.studio.thegraph.com/query/19156/olympus/v0.0.1"
const graphqlQuery = {
    operationName: "BondDiscounts",
    query: `query BondDiscounts{
        bondDiscounts(subgraphError: deny, orderBy: timestamp, orderDirection: desc){
          timestamp
          dai_discount
          ohmdai_discount
          frax_discount
          ohmfrax_discount
          eth_discount
          lusd_discount
          ohmlusd_discount
        }
      }`,
    variables: {}
};
export const fetchBondDiscounts = createAsyncThunk("bondDiscounts/fetchBondDiscounts", async () =>{
    try{
        const response = await axios.post(endpoint, graphqlQuery)
        if(!response.data.data){
            throw new Error('No data returned')
        }
        if(!response.data.data.bondDiscounts){
            throw new Error('No data returned')
        }
        console.log(response.data)
        return response.data.data.bondDiscounts
    }catch(err){
        console.error(err);
    }
})
const bondDiscountsSlice = createSlice({
    name: "bondDiscounts",
    initialState:{
        fetchingStatus: 'pending',
        bondDiscounts: {}
    },
    reducers:{

    },
    extraReducers(builders){
        builders
        .addCase(fetchBondDiscounts.pending, (state, action) =>{
            state.fetchingStatus = 'pending'
        })
        .addCase(fetchBondDiscounts.fulfilled, (state, action) =>{
            state.fetchingStatus = 'fulfilled'
            state.bondDiscounts = action.payload
        })
        .addCase(fetchBondDiscounts.rejected, (state, action) =>{
            state.fetchingStatus = 'rejected'
        })
    }
})
export default bondDiscountsSlice.reducer