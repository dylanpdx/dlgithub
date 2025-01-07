import { Release } from "../types/release";
import Markdown from 'preact-markdown';
import AssetView from "./asset";

const ReleaseView = (props:{release:Release}) => {
    return (
        <div class="card">
            <header><h2>{props.release.name}</h2></header>
            <details>
                <summary>View release details</summary>
                <Markdown {...{markdown:props.release.body}}/>
            </details>
            <h3>Downloads:</h3>
                {
                    props.release.assets.map(asset => (
                        <div class="row"><div class={"col"}><AssetView asset={asset}/></div></div>
                    ))
                }
        </div>
    );
};

export default ReleaseView;