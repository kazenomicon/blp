import Script from 'next/script'
import React from 'react'

const Tweets = ({ twitterId }) => {
    return (
        <div className='my-10 justify-center text-center xl:mx-24 lg:mx-20 md:mx-16 mx-4' id='social'>
            <div className='md:flex flex-row justify-center items-center'>
                <div className='flex md:mx-8 justify-center'>
                    <a class="twitter-timeline" data-height="600" data-width="400" data-theme="light" href="https://twitter.com/blindinglightsv?ref_src=twsrc%5Etfw">

                    </a>
                    <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8">

                    </Script>
                </div>
                <div className='flex md:mx-8 justify-center md:mt-0 mt-8'>
                    <div id="fb-root"></div>
                    <Script async defer crossorigin="anonymous" src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v20.0&appId=459793798141933" nonce="HaDtEuE3">

                    </Script>
                    <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=100087656962418" data-tabs="timeline" data-width="400" data-height="600" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/profile.php?id=100087656962418" class="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/profile.php?id=100087656962418">Blinding Lights Project</a>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweets;