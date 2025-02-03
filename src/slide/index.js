import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import Save from './save';

const SlideIcon = (
    <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="m18 6v11h4v-11h-4z" />
        <path d="m2 17h4v-11h-4v11z" />
        <path d="m7.0059 4v15.004h9.9902v-15.004h-9.9902zm1.3574 1.3555h7.2773v12.291h-7.2773v-12.291z" />
    </svg>
);

registerBlockType('cb/slide', {
    icon: SlideIcon,
    attributes: {
        slideId: {
            type: 'string',
            default: ''
        }
    },
    edit: function Edit({ attributes, setAttributes, clientId }) {
        const { slideId } = attributes;
        const blockProps = useBlockProps();

        const { hasChildBlocks } = useSelect((select) => {
            const { getBlockOrder } = select('core/block-editor');
            return {
                hasChildBlocks: getBlockOrder(clientId).length > 0,
            };
        }, [clientId]);

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Slide Settings', 'img-cb')} initialOpen={true}>
                        <TextControl
                            label={__('Slide ID', 'img-cb')}
                            value={slideId}
                            onChange={(value) => setAttributes({ slideId: value })}
                            help={__('Optional HTML ID for this slide', 'img-cb')}
                            __nextHasNoMarginBottom={true}
                        />
                    </PanelBody>
                </InspectorControls>
                <div {...blockProps}>
                    <InnerBlocks
                        templateLock={false}
                        renderAppender={
                            !hasChildBlocks ? InnerBlocks.ButtonBlockAppender : undefined
                        }
                    />
                </div>
            </Fragment>
        );
    },
    save: Save,
});
