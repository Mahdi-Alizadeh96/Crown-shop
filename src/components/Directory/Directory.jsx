import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory-selectors';
import MenuItems from '../Menu-items/Menu-items';

const Directory = ({sections}) => {

    return (
        <div className='directory-menu'>
            {sections.map(({id, ...otherSection}) => (
                <MenuItems key={id} {...otherSection} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySection
})

export default connect(mapStateToProps)(Directory);