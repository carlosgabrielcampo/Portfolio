import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((e, i) => (
                    <span key={e + i} className={`${letterClass} _${i + idx}`}> 
                        {e}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters