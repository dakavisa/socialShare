import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const inter = Inter({ subsets: ['latin'] })

const LinkedInShareButton = ({ url }: { url: string }) => {
  useEffect(() => {
    if (window.IN) {
      window.IN.init({
        // Configure the share button
        "linkedin-share": {
          url: url,
          counter: "right",
        },
      });
    }
  }, [url]);

  return (
    <>
      {typeof window !== "undefined" && (
        <script
          type="IN/Share"
          data-url={url}
          data-counter="right"
        ></script>
      )}
    </>
  );
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="fb-share-button" data-href={'www.google.com'} data-layout="button" data-size="large">
        <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${'www.google.com'}&amp;src=sdkpreparse`} className="fb-xfbml-parse-ignore">Share on Facebook</a>
    </div>

      <a href="https://twitter.com/share?text=The%20New%20York%20Supreme%20Court%20justice%20said%20the%20case%2C%20over%20reporting%20on%20his%20tax%20returns%2C%20failed%20%E2%80%9Cas%20a%20matter%20of%20constitutional%20law.%22&url=https%3A%2F%2Fwww.huffpost.com%2Fentry%2Ftrump-lawsuit-new-york-times-dismissed_n_64530436e4b0ff22e37819f5%3Futm_campaign%3Dshare_twitter%26ncid%3Dengmodushpmg00000004&hashtags=&via=HuffPostPol" className="twitter-share-button" data-size="large" data-url="https://www.google.com" data-lang="en" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    
      <div>
      <p>My awesome content!</p>
      <LinkedInShareButton url={'www.google.com'} />
    </div>

    <FacebookShareButton
      url={'https://www.example.com'}
      quote={'Dummy text!'}
      hashtag="#muo"
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <TwitterShareButton
      url={'https://www.example.com'}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>

    <LinkedinShareButton
      url={'https://www.example.com'}
    >
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    </main>
  )
}