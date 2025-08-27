"use client"

import Link from 'next/link';
import { Logo } from '../Logo';
import React from 'react';
import { icons } from '@/icons/';
import { usePathname } from 'next/navigation';
const { DashboardIcon, SettingsIcon, ProfileIcon } = icons

const linkData = [
    {
        id: 1,
        href: '/',
        text: "Dashboard",
        icon: <DashboardIcon />
    },
    {
        id: 1,
        href: '/tasks',
        text: "Tasks",
        icon: <DashboardIcon />
    },
    {
        id: 2,
        href: '/profile',
        text: "Profile",
        icon: <ProfileIcon />
    },
    {
        id: 3,
        href: '/settings',
        text: "Settings",
        icon: <SettingsIcon />
    }
]

export const Aside = () => {
    const pathname = usePathname()
    
    return (
        <div className="flex flex-col w-[300px] border-r-[1px] border-r-gray-500 h-[100%] p-[16px]">
            <Logo />
            {linkData.map(({ href, id, text, icon }) => (
                <React.Fragment key={`${id}${href}`}>
                    <Link key={id} href={href} className={`flex items-center p-2 mb-[8px]  ${pathname === href ? 'bg-gray-100' : ''}`}>
                        <span className='mr-[8px]'>{icon}</span>
                        {text}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
};
