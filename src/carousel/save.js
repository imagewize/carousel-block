import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

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
        rtl,
        responsiveWidth,
        responsiveSlides,
        responsiveSlidesToScroll,
        slidePadding,
        scrollGroup
    } = attributes;

    const slickSettings = {
        slidesToShow: parseInt(slidesToShow),
        slidesToScroll: parseInt(slidesToScroll),
        arrows,
        dots,
        infinite,
        autoplay,
        autoplaySpeed: parseInt(autoplaySpeed),
        speed: parseInt(speed),
        rtl,
        responsive: [{
            breakpoint: parseInt(responsiveWidth) + 1,
            settings: {
                slidesToShow: parseInt(responsiveSlides),
                slidesToScroll: parseInt(responsiveSlidesToScroll)
            }
        }]
    };

    const blockProps = useBlockProps.save({
        className: classnames(
            'slick-slider',
            { 'cb-single-slide': slidesToShow === 1 },
            { 'cb-padding': slidePadding }
        ),
        'data-slick': JSON.stringify(slickSettings),
        dir: rtl ? 'rtl' : undefined
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
}
