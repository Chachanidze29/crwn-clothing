import { React } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    Image,
    CollectionFooterContainer,
    Name,
    Price,
    AddButton
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <Image
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionFooterContainer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </CollectionFooterContainer>
            <AddButton onClick={() => dispatch(addItem(item))} inverted>Add to cart</AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem;