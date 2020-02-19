import React, {useState, useEffect} from 'react'
import MyResume from "../../assets/LS_Resume.pdf"
import {StyledIframe, ResumeDiv} from './ResumeStyle'

const Resume = () => {
    const [url, setUrl] = useState(`${MyResume}#zoom=100`)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
    },[window.innerWidth, url])

    const handleResize = () => {
        if (window.innerWidth <= 500) {
            setLoading(true)
            setUrl(`${MyResume}#zoom=40`)
            setLoading(false)
        }
        if (window.innerWidth <= 592) {
            setLoading(true)
            setUrl(`${MyResume}#zoom=50`)
            setLoading(false)
        }
        else if (window.innerWidth <= 642) {
            setLoading(true)
            setUrl(`${MyResume}#zoom=68`)
            setLoading(false)
        }
        else if (window.innerWidth <= 760) {
            setLoading(true)
            setUrl(`${MyResume}#zoom=75`)
            setLoading(false)
        }
        else if (window.innerWidth <= 840) {
            setLoading(true)
            setUrl(`${MyResume}#zoom=90`)
            setLoading(false)
        }
        else
        {
            setLoading(true)
            setUrl(`${MyResume}#zoom=100`)
            setLoading(false)
        }
    }
    console.log(url)
    return(
        <ResumeDiv>
            {!loading ? <StyledIframe title="Eli Sacks' Resume" src={url} frameBorder='0'  /> : null}
        </ResumeDiv>
    )   
}
export default Resume