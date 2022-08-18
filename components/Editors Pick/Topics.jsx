import CardStyle from '../../styles/EditorsPick.module.scss'
import cx from 'classnames'
import RecomendedTopic from './RecomendedTopic'

export default function Topics({ url, recomendedTopics }) {
    return (
        <div className={cx(CardStyle.collg4, CardStyle.trending, CardStyle.mtlg0, CardStyle.mt5)}>
            <div className={CardStyle.topics}>
                <h3 className={cx(CardStyle.sectiontitleleft, CardStyle.mb4)}> Recommended Topics</h3>
                {recomendedTopics.map(item => {
                    return <RecomendedTopic key={item.id} cateogary={item.Cateogary} />
                })}
            </div>
        </div>
    )
}