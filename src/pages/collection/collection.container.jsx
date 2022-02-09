import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import { useParams } from "react-router-dom";

import CollectionPage from './collection.component';
import Spinner from "../../components/spinner/spinner.component";


const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!){
        getCollectionsByTitle(title: $title) {
            id
            title
            items {
                id
                name
                price
                imageUrl
                }
            }
        }
`;

const CollectionPageContainer = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_COLLECTION_BY_TITLE, { variables: { title: id } });
    if (error) return <p>Error: {error.message}</p>;
    if (loading) return <Spinner />;
    else {
        const collection = data.getCollectionsByTitle;
        return <CollectionPage collection={collection} />
    };
}

export default CollectionPageContainer;