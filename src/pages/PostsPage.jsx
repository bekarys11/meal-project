import { useGetPostByIdQuery, useGetPostsQuery } from "../api/posts";
import { useGetTodosByIdQuery } from "../api/todos";
import TodosPage from "./TodosPage";

function PostsPage() {
    const { data, isLoading } = useGetPostsQuery()
    const { data: post, isLoading: isPostLoading } = useGetPostByIdQuery(1, {
        pollingInterval: 3000,
    })
    const { data: todo, isLoading: areTodosLoading, error, isError } = useGetTodosByIdQuery(1,)

    if (isLoading || isPostLoading || areTodosLoading) {
        return (
            <p>Loading...</p>
        )
    }

    isError && <p>{error}</p>

    return (
        <div>
            <TodosPage />
            {
                data.map(post => <p key={post.id}>{post.id}</p>)
            }
            {
                <p>{post?.id}</p>
            }
        </div>
    );
}

export default PostsPage;