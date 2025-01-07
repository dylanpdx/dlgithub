import Markdown from 'preact-markdown';
import { Asset } from '../types/release';
import getIconFor from '../iconUtils';

const Loading = () => {
    return (
        <div class="loading">
            <h3>Getting releases...</h3>
            <progress></progress>
        </div>
    );
};

export default Loading;