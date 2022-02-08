import { React } from 'react';
import withRouter from '../withRouter/withRouter.component';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    Title,
    Subtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, location, history }) => (
    <MenuItemContainer className={`${size}`} onClick={() => history(`${location.pathname}${linkUrl}`)}>
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

export default withRouter(MenuItem);