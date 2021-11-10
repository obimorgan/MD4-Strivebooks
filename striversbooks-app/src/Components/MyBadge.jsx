import Badge from 'react-bootstrap/Badge'

const MyBadge = ({ content, colour }) => (
    <Badge style={{ color: colour }} variant="secondary">{content}</Badge>
)

export default MyBadge