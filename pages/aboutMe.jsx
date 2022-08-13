import aboutStyle from '../styles/aboutContent.module.scss';
import PostStyle from '../styles/Banner.module.scss';
import data from '../Data/index.json';
import cx from 'classnames'
import SeoOptimised from '../components/Seo';
import Image from 'next/image'
import MarkdownView from 'react-showdown';

export default function about({ aboutMeCont }) {

    return (
        <>
            <SeoOptimised curPage={`About Me`} Description={data.githubIntro} key={`coding, blog, react, react js, python, python3, django, restful api, developer, developement, flutter, next, next js, react.js, next.js, python 3, server, deployment, java, javascript, dev, hashnode, blogging, aman, ojha, coder, coderaman, coderaman07, rushx, daysofcode, downthecode, instagram, facebook, portfolio`} />
            <div className={cx(PostStyle.text11, PostStyle.py5)}>
                <div className={cx(PostStyle.image, PostStyle.mbsm5, PostStyle.mb4, aboutStyle.mt4)}>
                    {/* <img src={data.ownerImage} className={cx(PostStyle.imgfluid, PostStyle.radiusimagefull, aboutStyle.CustomImage)} alt={data.ownerName} /> */}
                    <Image src={data.ownerImage} className={cx(PostStyle.ultraMonitor, PostStyle.imgfluid, PostStyle.radiusimagefull)} width={`1312`} height={`800`} layout='responsive' alt={data.ownerName} />
                </div>
                <div className={PostStyle.container}>
                    <div className={PostStyle.row}>
                        <div className={PostStyle.collg8}>
                            <div className={aboutStyle.aboutContent}>
                                {/* <span>{aboutMeCont}</span> */}
                                <span><MarkdownView
                                    markdown={aboutMeCont}
                                    className={aboutStyle.linewrap}
                                    options={{ emoji: true }}
                                /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    // let res = await fetch('https://raw.githubusercontent.com/coderaman07/coderaman07/master/Readme.md')
    // console.log(res.json())
    // let aboutMeCont = await res.json()
    // console.log(aboutMeCont)

    const [aboutMeContRes] = await Promise.all([
        fetch('https://raw.githubusercontent.com/coderaman07/coderaman07/master/README.md')
    ])

    var [aboutMeCont] = await Promise.all([
        aboutMeContRes.text()
    ])

    return {
        props: {
            aboutMeCont,
        },
        revalidate: 3600,
    }
}