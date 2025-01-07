import Markdown from 'preact-markdown';
import { Asset } from '../types/release';
import getIconFor from '../iconUtils';

const AssetView = (props:{asset:Asset}) => {
    return (
        <a class="button" href={props.asset.browser_download_url}>
            <svg width="15" height="15" class='dlIcon'>
                <image href={getIconFor(props.asset.name)} width="15" height="15"/>    
            </svg>
            {props.asset.name}
        </a>
    );
};

export default AssetView;