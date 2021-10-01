import PropTypes from 'prop-types'
import { LoadMore } from './Button.styled'

export const LoadMoreBtn = ({ onClick }) => {
    return (
        <LoadMore
            type="submit"
            onClick={(e) => onClick(e)}>
            Load More
        </LoadMore>
    )
}

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
}