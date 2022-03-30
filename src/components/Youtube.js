/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react'
import './Blog.scss'
import axios from 'axios'
import moment from 'moment'

function Youtube() {
    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {

    }, [])

    const handleSearch = async () => {
        // let res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        //     part: 'snippet',
        // maxResults: '20',
        // key: 'AIzaSyDjgKb3jNrG2qEgEzAVEKK4e-FmcFL2a-c',
        // type: 'video',
        // q: query
        // })

        let res = await axios({
            'method': 'GET',
            'url': 'https://www.googleapis.com/youtube/v3/search',
            'params': {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyDjgKb3jNrG2qEgEzAVEKK4e-FmcFL2a-c',
                'type': 'video',
                'q': query
            }
        })
        if (res && res.data && res.data.items) {
            let raw = res.data.items
            let result = []
            if (raw && raw.length > 0) {

                // eslint-disable-next-line array-callback-return
                raw.map(item => {
                    let obj = {}
                    obj.id = item.id.videoId
                    obj.title = item.snippet.title
                    obj.createAt = item.snippet.publishedAt
                    obj.author = item.snippet.channelTitle
                    obj.description = item.snippet.description
                    result.push(obj)
                })
            }
            setVideos(result)
        }
    }

    return (
        <div className='youtube-search-container'>
            <div className='yt-search'>
                <input type='text' placeholder='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {videos && videos.length > 0 &&
                videos.map(item => {
                    return (
                        <div className='yt-result' key={item.id}>
                            <div className='left'>
                                <iframe className='iframe-yt'
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                >
                                </iframe>
                            </div>
                            <div className='right'>
                                <div className='title'>
                                    {item.title}
                                </div>
                                <div className='created-at'>
                                    Created At: {moment(item.createAt).format('DD-MM-YYYY HH:mm:ss A')}
                                </div>
                                <div className='author'>
                                    Author: {item.author}
                                </div>
                                <div className='description'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Youtube