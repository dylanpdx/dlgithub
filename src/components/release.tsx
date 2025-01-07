import { Release } from "../types/release";
import Markdown from 'preact-markdown';
import AssetView from "./asset";

const ReleaseView = (props:{release:Release}) => {
    const topVisible = 3;
    // sort assets by download count
    props.release.assets.sort((a,b) => b.download_count - a.download_count);

    // if there are more than topVisible assets, show the top topVisible and the rest in a details element
    let extraAssets = [];
    if (props.release.assets.length > topVisible){
        extraAssets = props.release.assets.slice(topVisible);
        props.release.assets = props.release.assets.slice(0,topVisible);
    }


    return (
        <div class="card">
            <header><h2>{props.release.name}</h2></header>
            {props.release.prerelease ? <h3>This release is marked as a pre-release.</h3> : null}
            <details>
                <summary>View release details</summary>
                <div class="card">
                    <Markdown {...{markdown:props.release.body}}/>
                </div>
            </details>
            {props.release.assets.length > 0 ? (<h3>Downloads:</h3>) : <h3>It seems this release has no downloadable assets.</h3>}
            {
                props.release.assets.map(asset => (
                    <div class="row"><div class={"col"}><AssetView asset={asset}/></div></div>
                ))
            }
            {extraAssets.length > 0 ? (<details>
                <summary>View {extraAssets.length} more downloads for this release</summary>
                {
                    extraAssets.map(asset => (
                        <div class="row"><div class={"col"}><AssetView asset={asset}/></div></div>
                    ))
                }
            </details>) : null}
        </div>
    );
};

export default ReleaseView;