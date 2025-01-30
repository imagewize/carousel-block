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
                        {/* Inspector controls implementation */}
                    </PanelBody>
                    <PanelBody title={__('Responsive Settings', 'cb')} initialOpen={false}>
                        {/* Responsive settings implementation */}
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
