import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import classnames from 'classnames';
import save from './save';

import './editor.scss';

const ALLOWED_BLOCKS = ['cb/slide'];

const CarouselIcon = (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false">
        <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
);

registerBlockType('cb/carousel', {
    icon: CarouselIcon,
    attributes: {
        slidesToShow: {
            type: 'number',
            default: 3
        },
        slidesToScroll: {
            type: 'number',
            default: 1
        },
        arrows: {
            type: 'boolean',
            default: true
        },
        dots: {
            type: 'boolean',
            default: true
        },
        infinite: {
            type: 'boolean',
            default: true
        },
        autoplay: {
            type: 'boolean',
            default: false
        },
        autoplaySpeed: {
            type: 'number',
            default: 3000
        },
        speed: {
            type: 'number',
            default: 500
        },
        rtl: {
            type: 'boolean',
            default: false
        },
        responsiveWidth: {
            type: 'number',
            default: 768
        },
        responsiveSlides: {
            type: 'number',
            default: 1
        },
        responsiveSlidesToScroll: {
            type: 'number',
            default: 1
        }
    },
    edit: function Edit({ attributes, setAttributes, clientId }) {
        const {
            slidesToShow,
            slidesToScroll,
            speed,
            arrows,
            dots,
            infinite,
            autoplay,
            autoplaySpeed,
            rtl,
            responsiveWidth,
            responsiveSlides,
            responsiveSlidesToScroll,
        } = attributes;

        const slideCount = useSelect(
            (select) => select('core/block-editor').getBlock(clientId).innerBlocks.length
        );

        const blockProps = useBlockProps({
            className: classnames(
                `cb-shows-${slidesToShow}-slides`,
                slideCount + 1 > slidesToShow ? 'cb-show-scrollbar' : 'cb-hide-scrollbar'
            ),
        });

        const placeholder = (
            <div className="cb-carousel-placeholder">
                {__('Click plus (+) to add slides', 'cb')}
            </div>
        );

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Carousel Settings', 'cb')} initialOpen={true}>
                        <RangeControl
                            label={__('Slides to Show', 'cb')}
                            value={slidesToShow}
                            onChange={(value) => setAttributes({ slidesToShow: value })}
                            min={1}
                            max={10}
                        />
                        <RangeControl
                            label={__('Slides to Scroll', 'cb')}
                            value={slidesToScroll}
                            onChange={(value) => setAttributes({ slidesToScroll: value })}
                            min={1}
                            max={10}
                        />
                        <RangeControl
                            label={__('Animation Speed (ms)', 'cb')}
                            value={speed}
                            onChange={(value) => setAttributes({ speed: value })}
                            min={100}
                            max={3000}
                            step={100}
                        />
                        <ToggleControl
                            label={__('Show Arrows', 'cb')}
                            checked={arrows}
                            onChange={(value) => setAttributes({ arrows: value })}
                        />
                        <ToggleControl
                            label={__('Show Dots', 'cb')}
                            checked={dots}
                            onChange={(value) => setAttributes({ dots: value })}
                        />
                        <ToggleControl
                            label={__('Infinite Loop', 'cb')}
                            checked={infinite}
                            onChange={(value) => setAttributes({ infinite: value })}
                        />
                        <ToggleControl
                            label={__('Autoplay', 'cb')}
                            checked={autoplay}
                            onChange={(value) => setAttributes({ autoplay: value })}
                        />
                        {autoplay && (
                            <RangeControl
                                label={__('Autoplay Speed (ms)', 'cb')}
                                value={autoplaySpeed}
                                onChange={(value) => setAttributes({ autoplaySpeed: value })}
                                min={1000}
                                max={10000}
                                step={500}
                            />
                        )}
                        <ToggleControl
                            label={__('RTL Mode', 'cb')}
                            checked={rtl}
                            onChange={(value) => setAttributes({ rtl: value })}
                        />
                    </PanelBody>
                    <PanelBody title={__('Responsive Settings', 'cb')} initialOpen={false}>
                        <RangeControl
                            label={__('Breakpoint Width (px)', 'cb')}
                            value={responsiveWidth}
                            onChange={(value) => setAttributes({ responsiveWidth: value })}
                            min={320}
                            max={1200}
                            step={1}
                        />
                        <RangeControl
                            label={__('Slides to Show (Mobile)', 'cb')}
                            value={responsiveSlides}
                            onChange={(value) => setAttributes({ responsiveSlides: value })}
                            min={1}
                            max={5}
                        />
                        <RangeControl
                            label={__('Slides to Scroll (Mobile)', 'cb')}
                            value={responsiveSlidesToScroll}
                            onChange={(value) => setAttributes({ responsiveSlidesToScroll: value })}
                            min={1}
                            max={5}
                        />
                    </PanelBody>
                </InspectorControls>
                <div {...blockProps}>
                    <InnerBlocks
                        orientation="horizontal"
                        allowedBlocks={ALLOWED_BLOCKS}
                        templateLock={false}
                        renderAppender={InnerBlocks.ButtonBlockAppender}
                        placeholder={placeholder}
                    />
                </div>
            </Fragment>
        );
    },
    save
});
