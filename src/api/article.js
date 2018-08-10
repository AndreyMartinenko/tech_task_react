export const articleItem = (id) => {
    return fetch(
        `https://api.imgur.com/3/gallery/album/${id}`,
        {
            method: 'GET',
            headers: {
                'Authorization':'Client-ID 36bb556abe69ccd'
            }
        }
    )
}
export const commentsFetcher = (id) => {
    return fetch(
        `https://api.imgur.com/3/gallery/album/${id}/comments/`,
        {
            method: 'GET',
            headers: {
                'Authorization':'Client-ID 36bb556abe69ccd'
            }
        }
    )
}