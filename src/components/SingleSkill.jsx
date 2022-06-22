const SingleSkill = ({name, size}) => {

    return (
        <div className={`single-skill size-${size} ${name}` }>
            <h1>{name}</h1>
        </div>
    )
}

export default SingleSkill
