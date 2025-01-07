import { useRoute } from "preact-iso";
import { useEffect, useState } from "preact/hooks";
import { getSingleRelease } from "../../api";
import Loading from "../../components/loading";
import ReleaseView from "../../components/release";

export function Release(){
    let { user, repo, tag } = useRoute().params;
    const [release, setRelease] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getSingleRelease(user, repo,tag).then(releases => {
            setRelease(releases);
            setLoading(false);
        });
    }, [user, repo]);

	return (
		<div class="repo">
			<h1 class={'repoText'}>{user}/{repo} release {tag}</h1>
			<div class="releaseList">
                <a href={`/${user}/${repo}`}>&lt; Back to all releases</a>
                <div style="padding-top:1%">{loading ? <Loading/> : (<div class="row"><div class="col"><ReleaseView release={release} /></div></div>)}</div>
			</div>
		</div>
	);
}