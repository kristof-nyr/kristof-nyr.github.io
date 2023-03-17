const SingleSkill = ({name, size}) => {

    return (
        <div className={`single-skill ${name}` }>
            <div className={ `size-${size}` }>
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default SingleSkill
