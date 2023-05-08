import Post from "./Post.js";

export default function Posts() {
    const posts = [
        {user: {name: "meowed", image: "assets/img/meowed.svg"}, 
        content: {image: "assets/img/gato-telefone.svg", name: "gato-telefone"}, 
        likes: {image: "assets/img/respondeai.svg", name: "respondeai", amount: 101523}},

        {user: {name: "barked", image: "assets/img/barked.svg"}, 
        content: {image: "assets/img/dog.svg", name: "dog"}, 
        likes: {image: "assets/img/adorable_animals.svg", name: "adorable_animals", amount: 99159}},

        {user: {name: "filomoderna", image: "assets/img/filomoderna.svg"}, 
        content: {image: "assets/img/memeriagourmet.svg", name: "memeriagourmet"}, 
        likes: {image: "assets/img/catanacomics.svg", name: "catanacomics", amount: 50263}},
    ]


    return (
        <div class="posts">
            {posts.map(post => <Post user={post.user} content={post.content} likes={post.likes} />)}
        </div>
    );
}