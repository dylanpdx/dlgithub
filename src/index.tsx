import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Repo } from './pages/Repo/index.js';
import { Release } from './pages/Release/index.js';
import { LatestRelease } from './pages/Latest/index.js';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/:user/:repo/releases/tag/:tag" component={Release} />
					<Route path="/:user/:repo/releases/latest" component={LatestRelease} />
					<Route path="/:user/:repo" component={Repo} />
					<Route path="/:user/:repo/*" component={Repo} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
