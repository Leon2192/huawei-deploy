"use client"
import Image from 'next/image'
import React from 'react'
import { LuUserCog, LuCalendarClock } from "react-icons/lu";
import { RiFilePaper2Line } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { BsClipboard2Data } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { BsHouseGear } from "react-icons/bs";
import { LuMonitorPlay } from "react-icons/lu";

import quickGuide from '@/constants/quickGuide.json'
import Link from 'next/link';
import './quickGuide.css'

const iconsMap = {
    LuUserCog: LuUserCog,
    LuCalendarClock: LuCalendarClock,
    RiFilePaper2Line: RiFilePaper2Line,
    BsClipboard2Data: BsClipboard2Data,
    VscGraph: VscGraph,
    FaUsersLine: FaUsersLine,
    BsHouseGear: BsHouseGear,
    LuMonitorPlay: LuMonitorPlay
    // Añade otros íconos que vayas a usar aquí
};

const page = () => {

    return (
        <div className='relative w-full h-auto md:h-auto overflow-hidden bg-[#f5f5f5] '>
            <div className='flex justify-center flex-col text-center mb-10'>
                <Image src="/imagenes/quick-guide-principal.png" alt="Banner Partners"
                    width={1920}
                    height={100}
                    style={{ objectFit: 'contain' }}
                    className=""
                />
                <h1 className='text-4xl'>eKit Official Website Quick Guide</h1>
            </div>
            <div className='container flex justify-center flex-wrap flex-row gap-[1.6rem] mb-40'>
                {quickGuide.map((item) => {
                    const IconComponent = iconsMap[item.icon]
                    return (
                        <div key={item.id} className="cardQuickGuide bg-[#fff] pt-5 px-5 rounded-[16px] w-[32%] sm-min-w-full flex flex-col justify-between">
                            <div className='flex flex-col justify-start gap-4'>
                                <div className='flex flex-row gap-2'>
                                    <IconComponent color='red' size={30} />
                                    <h6 className='font-bold text-xl'>{item.title}</h6>
                                </div>
                                <ul className='list-disc p-5 gap-y-4 flex flex-col text-sm'>
                                    {item.list.map((listGuide) => (
                                        <li key={listGuide.id}>{listGuide.list}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-row justify-end border-t border-gray-300'>
                                <Link href={item.url} className='text-gray-400 p-3'>More  {` >`}</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default page