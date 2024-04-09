import { useGetTodosQuery } from "../api/todos";

function TodosPage() {
    const { data, isLoading } = useGetTodosQuery()

    if (isLoading) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <div>
            {
                data.map(todo => <p key={todo.id}>{todo.title}</p>)
            }
        </div>
    );
}

export default TodosPage;