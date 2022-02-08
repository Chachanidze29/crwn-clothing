import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
    query {
        collections {
        id
        title
        items {
            id
            imageUrl
            name
            price
            }
        }
    }
`;

const CollectionsOverviewContainer = () => {
    const { loading, error, data } = useQuery(GET_COLLECTIONS);
    console.log(data);
    if (error) return <p> Error : ({error.message}</p>;
    if (loading) return <Spinner />;
    return <CollectionsOverview collections={data.collections} />
}

export default CollectionsOverviewContainer;