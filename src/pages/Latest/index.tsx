import { useRoute } from "preact-iso";
import { useEffect, useState } from "preact/hooks";
import { getLatestRelease } from "../../api";
import Loading from "../../components/loading";
import ReleaseView from "../../components/release";

export function LatestRelease(){
    let { user, repo } = useRoute().params;
    const [release, setRelease] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getLatestRelease(user, repo).then(releases => {
            setRelease(releases);
            setLoading(false);
        });
    }, [user, repo]);

	return (
		<div class="repo">
			<h1 class={'repoText'}>Latest release for {user}/{repo}</h1>
			<div class="releaseList">
                <a href={`/${user}/${repo}`}>&lt; Back to all releases</a>
                <div style="padding-top:1%">{loading ? <Loading/> : (<div class="row"><div class="col"><ReleaseView release={release} /></div></div>)}</div>
			</div>
		</div>
	);
}