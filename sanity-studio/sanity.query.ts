import { createClient } from '@sanity/client';


const client = createClient({
    projectId: 'f3mkwelj',
    dataset: 'production',
    useCdn: false, // `false` if you want to ensure fresh data
});


export async function getBlogs() {
    return client
        .fetch('*[_type == "blog"]', {})
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}


export async function getDetails(id: string){
    console.log('id', id)
    const query = `*[_type == "blog" && _id== "${id}"]`;

    return client.fetch(query, {})
        .then(res => {
            console.log('res', res);
            return res;
        })
        .catch(err => {
            console.log('err', err);
            return err;
        });
}
export default client;