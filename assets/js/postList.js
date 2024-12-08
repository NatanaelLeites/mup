const postList = document.querySelector('.posts')
export const setupPosts = (data) => {
    if (data.length) {
        data.forEach(doc => {
            const post = doc.data()
            console.log(post)
        });
    } else {
        console.log('no hay nada')
    }
}