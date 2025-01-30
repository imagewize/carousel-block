import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

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
    edit: function Edit({ clientId }) {
        const blockProps = useBlockProps();
        const { hasChildBlocks } = useSelect((select) => {
            const { getBlockOrder } = select('core/block-editor');
            return {
                hasChildBlocks: getBlockOrder(clientId).length > 0,
            };
        }, [clientId]);

        return (
            <div {...blockProps}>
                <InnerBlocks
                    templateLock={false}
                    renderAppender={
                        !hasChildBlocks ? InnerBlocks.ButtonBlockAppender : undefined
                    }
                />
            </div>
        );
    },
    save: function Save() {
        const blockProps = useBlockProps.save();
        return (
            <div {...blockProps}>
                <InnerBlocks.Content />
            </div>
        );
    },
});
