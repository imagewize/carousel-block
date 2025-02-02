import {
    useBlockProps,
    InnerBlocks,
    InspectorControls,
    withColors,
    // WARNING: Using experimental features that might change in future WordPress versions
    __experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
    __experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, Button, Dropdown, ColorPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import classnames from 'classnames';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

import './editor.scss';

const ALLOWED_BLOCKS = ['cb/slide'];

/**
 * Edit component for the Carousel Block
 * 
 * Note: This component uses experimental WordPress features:
 * - __experimentalColorGradientSettingsDropdown
 * - __experimentalUseMultipleOriginColorsAndGradients
 * These features might change or be removed in future WordPress versions.
 */
const Edit = compose(
    withColors('arrowColor', 'arrowBackground', 'arrowHoverColor', 'arrowHoverBackground'),
    withSelect((select) => {
        const settings = select('core/block-editor').getSettings();
        return {
            colors: settings.colors || [],
        };
    })
)(function({ 
    attributes, 
    setAttributes, 
    clientId,
    arrowColor,
    setArrowColor,
    arrowBackground,
    setArrowBackground,
    arrowHoverColor,
    setArrowHoverColor,
    arrowHoverBackground,
    setArrowHoverBackground
}) {
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
        slidePadding,
        arrowColor: arrowColorAttr,
        arrowBackground: arrowBackgroundAttr,
        arrowHoverColor: arrowHoverColorAttr,
        arrowHoverBackground: arrowHoverBackgroundAttr,
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

    const colorGradientSettings = useMultipleOriginColorsAndGradients();

    const onArrowColorChange = (color) => {
        setArrowColor(color);
        setAttributes({ arrowColor: color });
    };

    const onArrowBackgroundChange = (color) => {
        setArrowBackground(color);
        setAttributes({ arrowBackground: color });
    };

    const onArrowHoverColorChange = (color) => {
        setArrowHoverColor(color);
        setAttributes({ arrowHoverColor: color });
    };

    const onArrowHoverBackgroundChange = (color) => {
        setArrowHoverBackground(color);
        setAttributes({ arrowHoverBackground: color });
    };

    return (
        <Fragment>
            <InspectorControls group="color">
                {arrows && (
                    <>
                        <ColorGradientSettingsDropdown
                            panelId={clientId}
                            settings={[
                                {
                                    label: __('Arrow Color', 'cb'),
                                    colorValue: arrowColor?.color || arrowColorAttr,
                                    onColorChange: onArrowColorChange
                                },
                                {
                                    label: __('Arrow Background', 'cb'),
                                    colorValue: arrowBackground?.color || arrowBackgroundAttr,
                                    onColorChange: onArrowBackgroundChange
                                },
                                {
                                    label: __('Arrow Hover Color', 'cb'),
                                    colorValue: arrowHoverColor?.color || arrowHoverColorAttr,
                                    onColorChange: onArrowHoverColorChange
                                },
                                {
                                    label: __('Arrow Hover Background', 'cb'),
                                    colorValue: arrowHoverBackground?.color || arrowHoverBackgroundAttr,
                                    onColorChange: onArrowHoverBackgroundChange
                                }
                            ]}
                            {...colorGradientSettings}
                        />
                    </>
                )}
            </InspectorControls>
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
                    {dots && (
                        <RangeControl
                            label={__('Dots Bottom Spacing', 'cb')}
                            value={parseInt(attributes.dotsBottomSpacing)}
                            onChange={(value) => setAttributes({ dotsBottomSpacing: `${value}px` })}
                            min={-100}
                            max={100}
                            step={1}
                        />
                    )}
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
});

export default Edit;
