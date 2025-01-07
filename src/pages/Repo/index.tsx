import { useRoute } from 'preact-iso';
import getGithubReleases from '../../api';
import { useEffect, useState } from 'preact/hooks';
import ReleaseView from '../../components/release';
import Loading from '../../components/loading';

export function Repo() {
    let { user, repo } = useRoute().params;
    const [releases, setReleases] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getGithubReleases(user, repo).then(releases => {
            setReleases(releases);
            setLoading(false);
        });
    }, [user, repo]);

	return (
		<div class="repo">
			<h1 class={'repoText'}>Releases for {user}/{repo}</h1>
			<div class="releaseList">
                {loading ? <Loading/> : (
                    releases.map(release => (
                        <div class="row"><div class="col"><ReleaseView release={release} /></div></div>
                    ))
                )}
			</div>
		</div>
	);
}