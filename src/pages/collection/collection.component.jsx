import { React } from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CollectionPageContainer, ItemsContainer, Title } from "./collection.styles";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <Title>{title}</Title>
            <ItemsContainer>
                {
                    items.map(item => <CollectionItem key={item['id']} item={item} />)
                }
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

export default CollectionPage;