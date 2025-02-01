import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import classnames from 'classnames';

import './editor.scss';

const ALLOWED_BLOCKS = ['cb/slide'];

export default function Edit({ attributes, setAttributes, clientId }) {
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
        slides,
        scrollGroup,
        slidePadding,
        arrowColor,
        arrowBackground,
        arrowHoverColor,
        arrowHoverBackground,
    } = attributes;

    const slideCount = useSelect(
        (select) => select('core/block-editor').getBlock(clientId).innerBlocks.length
    );

    const blockProps = useBlockProps({
        className: classnames(
            `cb-shows-${slidesToShow}-slides`,
            `cb-responsive-${responsiveSlides}-slides`,
            { 'cb-padding': slidePadding },
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
                    {arrows && (
                        <>
                            <div className="components-base-control">
                                <label className="components-base-control__label">
                                    {__('Arrow Color', 'cb')}
                                </label>
                                <ColorPalette
                                    value={arrowColor}
                                    onChange={(value) => setAttributes({ arrowColor: value })}
                                />
                            </div>
                            <div className="components-base-control">
                                <label className="components-base-control__label">
                                    {__('Arrow Background', 'cb')}
                                </label>
                                <ColorPalette
                                    value={arrowBackground}
                                    onChange={(value) => setAttributes({ arrowBackground: value })}
                                />
                            </div>
                            <div className="components-base-control">
                                <label className="components-base-control__label">
                                    {__('Arrow Hover Color', 'cb')}
                                </label>
                                <ColorPalette
                                    value={arrowHoverColor}
                                    onChange={(value) => setAttributes({ arrowHoverColor: value })}
                                />
                            </div>
                            <div className="components-base-control">
                                <label className="components-base-control__label">
                                    {__('Arrow Hover Background', 'cb')}
                                </label>
                                <ColorPalette
                                    value={arrowHoverBackground}
                                    onChange={(value) => setAttributes({ arrowHoverBackground: value })}
                                />
                            </div>
                        </>
                    )}
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
                    <RangeControl
                        label={__('Total Slides', 'cb')}
                        value={slides}
                        onChange={(value) => setAttributes({ slides: value })}
                        min={1}
                        max={20}
                    />
                    <ToggleControl
                        label={__('Enable Scroll Group', 'cb')}
                        checked={scrollGroup}
                        onChange={(value) => setAttributes({ scrollGroup: value })}
                    />
                    <ToggleControl
                        label={__('Enable Slide Padding', 'cb')}
                        checked={slidePadding}
                        onChange={(value) => setAttributes({ slidePadding: value })}
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
}
