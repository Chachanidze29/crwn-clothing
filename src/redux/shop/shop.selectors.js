import { createSelector } from "reselect";

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => {
        if (collections) {
            return Object.keys(collections).map(key => collections[key]);
        }
        return [];
    }
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => {
        if (collections) {
            return collections[collectionUrlParam];
        }
        return null;
    }
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)