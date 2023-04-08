const posts =[
    {
        title: 'Post one is the first async await fulfilled',
        body: 'This is post one'
    },
    {
        title: 'Post two is the second async await fulfilled',
        body: 'This is post two'
    }
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `
            <ul class='ordered--left'>
                <li>${post.title}</li>
            </ul>
            `;
        });
        document.body.innerHTML = output;
    },1000);
}

/*function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}*/


function createPost(post){
    return new Promise((fullfill, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                fullfill();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    });
}


getPosts();
createPost({title: 'Post three', body:'This is post three'}, getPosts);

console.log(getPosts());
