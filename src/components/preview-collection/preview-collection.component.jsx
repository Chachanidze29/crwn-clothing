import { React } from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import { PreviewCollectionContainer, Title, PreviewContainer } from './preview-collection.styles';

const PreviewCollection = ({ title, items }) => (
    <PreviewCollectionContainer>
        <Link to={title.toLowerCase()}><Title>{title.toUpperCase()}</Title></Link>
        <PreviewContainer>
            {
                items
                    .filter((_, index) => index < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </PreviewContainer>
    </PreviewCollectionContainer>
)

export default PreviewCollection;