import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
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
    } = attributes;

    // ...existing code from original edit function...
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
                    // ...existing controls code...
                </PanelBody>
                <PanelBody title={__('Responsive Settings', 'cb')} initialOpen={false}>
                    // ...existing responsive controls code...
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
