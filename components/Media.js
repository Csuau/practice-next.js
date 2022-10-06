import React from "react";
import Image from 'next/image'

const Media = ({
                   alt,
                   title,
                   relativePath,
                   name,
                   style,
                   loading = 'lazy',
                   extraClass = '',
                   height = null,
                   width = null,
                   isImageAPI = true,
                   layout,
                   objectFit,
               }) => {

    return (
        relativePath && (
            <React.Suspense fallback={null}>
                <Image
                    style={style}
                    src={relativePath}
                    loading={loading}
                    title={title || name}
                    alt={alt || name}
                    height={height}
                    width={width}
                    layout={layout}
                    objectFit={objectFit}
                />
            </React.Suspense>

        )
    )
}

export default React.memo(Media)
