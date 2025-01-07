import { Release } from './types/release';

const getGithubReleases = async (user: string, repo: string) => {
    const url = `https://api.github.com/repos/${user}/${repo}/releases`;
    try {
        const response = await fetch(url);
        return await response.json() as unknown as Release[];
    } catch (error) {
        console.error('Error fetching releases:', error);
        throw error;
    }
};

const getSingleRelease = async (user: string, repo: string, tag: string) => {
    const url = `https://api.github.com/repos/${user}/${repo}/releases/tags/${tag}`;
    try {
        const response = await fetch(url);
        return await response.json() as unknown as Release;
    } catch (error) {
        console.error('Error fetching release:', error);
        throw error;
    }
}

export { getGithubReleases, getSingleRelease };