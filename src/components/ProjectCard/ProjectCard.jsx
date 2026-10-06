import PropTypes from 'prop-types'
import styles from './ProjectCard.module.css'

function ProjectCard({ title, description, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ProjectCard
