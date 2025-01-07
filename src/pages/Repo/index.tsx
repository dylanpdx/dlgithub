import { useRoute } from 'preact-iso';

export function Repo() {
    let { user, repo } = useRoute().params;


	return (
		<div class="repo">
			<h1>Repo {user}/{repo}</h1>
			<section>

			</section>
		</div>
	);
}