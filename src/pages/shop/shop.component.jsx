import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import ShopPageContainer from "./shop.styles";

const ShopPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch])

    return (
        <ShopPageContainer>
            <Routes>
                <Route path="/" exact={true} element={<CollectionsOverviewContainer />} />
                <Route path="/:id" element={<CollectionPageContainer />} />
            </Routes>
        </ShopPageContainer>
    )
}

export default ShopPage;