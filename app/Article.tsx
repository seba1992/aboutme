import React from 'react';
//import PropTypes from 'prop-types';
import Image, {StaticImageData} from 'next/image';

type ArticleProps = {
    date: string
    title: string
    description: React.ReactNode
    image: StaticImageData
};

export default function Article ({ date,title, description, image }: ArticleProps) {
    return (
        <div className="rounded-lg border-3 p-4 bg-gray-100">
            <div className="text-blue-500">{date}</div>
            <div className="font-bold text-xl">{title}</div>
            <div>
                {description}
                <Image
                    className="dark:invert mx-auto rounded-lg m-5"
                    src={image.src}
                    alt={title}
                    width={400}
                    height={250}
                    priority
                />
            </div>
        </div>
    );
};