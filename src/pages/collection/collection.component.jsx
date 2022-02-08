import { React } from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { CollectionPageContainer, ItemsContainer, Title } from "./collection.styles";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
    const { id } = useParams();
    const collection = useSelector(selectCollection(id));
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