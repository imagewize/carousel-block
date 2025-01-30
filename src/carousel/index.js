import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import './style.scss';
import edit from './edit';
import save from './save';

const CarouselIcon = (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false">
        <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
);

registerBlockType('cb/carousel', {
    ...metadata,
    icon: CarouselIcon,
    edit,
    save
});
