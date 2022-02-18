import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/theme-slice";
import protocolMetricsSlice from "./olympus/protocol-metrics-slice";
import tokensSlice from "./olympus/tokens-slice";
import dailyBondsSlice from "./olympus/daily-bonds-slice";
import bondDiscountsSlice from "./olympus/bond-discounts-slice";
import stakesSlice from "./olympus/stakes-slice"
import unstakesSlice from "./olympus/unstakes-slice";
export default configureStore({
    reducer:{
        themeSlice: themeSlice,
        protocolMetrics: protocolMetricsSlice,
        tokens: tokensSlice,
        dailyBonds: dailyBondsSlice,
        bondDiscounts: bondDiscountsSlice,
        stakes: stakesSlice,
        unstakes: unstakesSlice
    }
})