import PropTypes from 'prop-types'
import { GalleryIltem } from "../GalleryItem/GelleryItem"
import { GalleryList } from "./ImageGallary.styled"

export const Gallery = ({ images, onImageClick }) => {
    return (
        <GalleryList>
            {images.map(image => (
                <GalleryIltem onClick={onImageClick}
                    key={image.id}
                    webformatURL={image.webformatURL}
                    name={image.name}
                    largeImage={image.largeImageURL}
                />
            ))}
        </GalleryList>
    )
}

Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        name: PropTypes.string,
    })),
    largeImageURL: PropTypes.string,
    onImageClick: PropTypes.func.isRequired,
}
