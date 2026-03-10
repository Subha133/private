'use client';

import React from 'react';
import { trackWhatsApp } from '@/utils';

interface WhatsAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

export default function WhatsAppLink({ href, children, ...props }: WhatsAppLinkProps) {
    return (
        <a href={href} onClick={trackWhatsApp} {...props}>
            {children}
        </a>
    );
}
