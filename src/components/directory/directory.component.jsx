import { React } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import { DirectoryContainer } from './directory.styles';

const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <DirectoryContainer>
            {
                sections.map(({ id, ...otherProps }) => {
                    return <MenuItem key={id} {...otherProps} />
                })
            }
        </DirectoryContainer>
    )
}

export default Directory;