import { useGetTodosByIdQuery, useGetTodosQuery } from "../api/todos";

function TodosPage() {
    const { data, isLoading, error, isError } = useGetTodosQuery();
    const { data: todo, isLoading: areTodosLoading } = useGetTodosByIdQuery(1)

    if (isLoading || areTodosLoading) {
        return (
            <p>Идет загрузка...</p>
        )
    }

    if (isError) {
        return (
            <p>Произошла ошибка: {error}</p>
        )
    }

    console.log(todo)

    return (
        <div>
            {
                <div>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                </div>
            }
        </div>
    );
}

export default TodosPage;