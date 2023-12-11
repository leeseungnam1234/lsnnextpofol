export const metadata = {
  title:"포트폴리오 사이트 Next.js로 만들기",
  description:"한가지 사이트를 다양한 프레임워크를 통해 만들어 보는 포트폴리오 사이트입니다.",
  keywords:["포트폴리오","리액트","넥스트","portfolio","react.js","next,js"]
}

export default function RootLayout({children}) {
    return(
        <html lang="ko">
            <link rel="icon" type="image/svg_xml" href="favicon.svg"/>
            <body>{children}</body>
        </html>
  )
}