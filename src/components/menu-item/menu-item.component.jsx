import { React } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    Title,
    Subtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <MenuItemContainer className={`${size}`} onClick={() => navigate(`${location.pathname}${linkUrl}`)}>
            <BackgroundImageContainer
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <ContentContainer>
                <Title>{title}</Title>
                <Subtitle>Shop Now</Subtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default MenuItem;