import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'
import { Video } from '@/components/Video'
import Link from 'next/link'

export default function Showcases() {
  const showcases = [
    {
      title: 'Some of my selected',
      subtitle: 'Showcases',
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_22_at_00_32_03_82261f4e58.mov',
      path: 'https://architex.website/',
    },
    {
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_22_at_00_22_51_e1dd49229e.mov',
      path: 'https://pingo.blog/',
    },
    {
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_22_at_17_04_32_5ce255623c.mov',
      path: 'https://drill-webgi-one.vercel.app/',
    },
    {
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_21_at_16_59_10_e46b80880d.mov',
      path: 'https://iphone-b750x98ir-bilgekaan-yilmazs-projects.vercel.app/',
    },
    {
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_21_at_15_38_48_57842595ae.mov',
      path: 'https://www.piri-web.com/en',
    },
    {
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_22_at_00_18_17_a4682f9579.mov',
      path: 'https://mockup-design-d7b953.webflow.io/',
    },
    {
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_21_at_17_39_21_1e6fcacb75.mov',
      path: 'https://piri-web-shopify-headless.vercel.app/de',
    },
    {
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_21_at_19_26_48_5366f5d3a9.mov',
      path: '',
    },
    {
      url: 'http://localhost:1337/uploads/Screen_Recording_2024_04_21_at_16_25_19_65806a469d.mov',
      path: '',
    },
  ]

  return (
    <div className="flex flex-col overflow-hidden">
      {showcases.map((showcase, index) => (
        <ContainerScroll
          key={index}
          titleComponent={
            showcase.title && (
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  {showcase.title}
                  <br />
                  <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                    {showcase.subtitle}
                  </span>
                </h1>
              </>
            )
          }
        >
          <Link href={showcase.path}>
            {/* <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        /> */}
            <Video url={showcase ? showcase.url : ''} />
          </Link>
        </ContainerScroll>
      ))}
    </div>
  )
}
