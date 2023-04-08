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
        posts.forEach((post, index)=>{
            output += `
            <ul class='ordered--left'>
                <li>${post.title}</li>
                <li>${post.body}</li>

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


/*function createPost(post){
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
}*/


/*const promise1 = Promise.resolve('I promise you, this is true!');
const promise2 = 3000;
const promise3 = 'times';
const promise4 =new Promise((resolve,reject)=>
    setTimeout(resolve, 2000, 'Forever! From Spidey')
    );

Promise.all([promise1,promise2, promise3,promise4]).then((values)=>console.log(values));
*/

// getPosts();
// createPost({title: 'Post three', body:'This is post three'}, getPosts);
/*createPost({
    title: 'Post three', 
    body:'This is post three'
}).then(getPosts);*/

/*createPost({
    title: 'Post three', 
    body:'This is post three'
}).then(getPosts).catch(error => console.log(err));
*/

// console.log(getPosts());


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
};

async function init(){
    await createPost({title:'Post three', body:'This is post three'});
    getPosts();
}

init();