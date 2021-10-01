import PropTypes from 'prop-types'

import { GalleryItem, GalleryItemImg } from "./GalleryItem.styled"

export const GalleryIltem = ({ webformatURL, name, largeImage, onClick }) => {
    return (
        <GalleryItem onClick={() => onClick(largeImage)}>
            <GalleryItemImg src={webformatURL} alt={name} />
        </GalleryItem>
    )
}

GalleryIltem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    name: PropTypes.string,
    largeImage: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,  
}