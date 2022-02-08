import { React } from "react";
import PreviewCollection from "../preview-collection/preview-collection.component";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({ id, ...collectionProps }) => (
                <PreviewCollection key={id} {...collectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
)


export default CollectionsOverview;