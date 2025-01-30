import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        slidesToShow,
        slidesToScroll,
        arrows,
        dots,
        infinite,
        autoplay,
        autoplaySpeed,
        speed,
        rtl
    } = attributes;

    const slickSettings = {
        slidesToShow: parseInt(slidesToShow),
        slidesToScroll: parseInt(slidesToScroll),
        arrows,
        dots,
        infinite,
        autoplay,
        autoplaySpeed: parseInt(autoplaySpeed),
        speed: parseInt(speed)
    };

    const blockProps = useBlockProps.save({
        className: 'slick-slider',
        'data-slick': JSON.stringify(slickSettings),
        dir: rtl ? 'rtl' : undefined
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
}
