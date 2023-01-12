"use client";

import { FacebookProvider, Page } from "react-facebook";

export default function Feed() {
  return (
    <FacebookProvider appId="543318894238018">
      <Page
        href="https://www.facebook.com/Studentorkesterfestivalen"
        tabs="timeline"
        smallHeader={true}
        hideCover={true}
        width="100%"
        hideCTA={true}
        showFacepile={false}
      />
    </FacebookProvider>
  );
}
